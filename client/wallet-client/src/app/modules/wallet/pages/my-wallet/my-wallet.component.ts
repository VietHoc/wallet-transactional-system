import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss'],
})
export class MyWalletComponent implements OnInit {
  public user: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.me().subscribe((user) => {
      this.user = user;
    });
  }
}
