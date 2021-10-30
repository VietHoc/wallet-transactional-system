import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public users = [
    {
      email: 'tom@gmail.com',
      password: '12345678',
    },
    {
      email: 'jerry@gmail.com',
      password: '12345678',
    },
  ];
  public loginForm: FormGroup;
  public currentUser = this.users[0];
  public errors = '';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      password: [
        this.currentUser.password,
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    const payload = {
      user: this.loginForm.value,
    };
    this.userService.login(payload).subscribe(
      (res) => {
        localStorage.setItem('token', `Bearer ${res.token}`);
        this.router.navigate(['/my-wallet']);
        this.messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          detail: res.message,
        });
      },
      (err) => {
        this.errors = err.error.message?.join(', ') || err.error.error;
      }
    );
  }

  public selectUser($event: any): void {
    this.currentUser = $event;
    this.loginForm.patchValue({
      email: $event.email,
      password: $event.password,
    });
  }
}
