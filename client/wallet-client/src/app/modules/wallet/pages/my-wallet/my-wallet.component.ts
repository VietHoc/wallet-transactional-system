import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/models/user.models';
import {UserService} from 'src/app/services/user.service';
import {WalletService} from 'src/app/services/wallet.service';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss'],
})
export class MyWalletComponent implements OnInit {
  public user: any;
  public errors: any;
  public deposit = 0;
  public withdraw = 0;
  public transfer = 0;
  public depositDescription = '';
  public withdrawDescription = '';
  public transferDescription = '';
  public query = '';
  public users: User[] = [];
  public selectedUser: User = new User();
  constructor(
    private userService: UserService,
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.userService.me().subscribe((user) => {
      this.user = user;
    });
  }

  public onDeposit(): void {
    this.walletService.deposit(this.deposit, this.depositDescription).subscribe(
      (_) => {
        this.user.balance = +this.user.balance + +this.deposit;
        this.deposit = 0;
        this.depositDescription = '';
        this.errors = null;
      },
      (err) => {
        this.errors = err.error.message.join(', ');
      }
    );
  }

  public onWithdraw(): void {
    this.walletService
      .withdraw(this.withdraw, this.withdrawDescription)
      .subscribe(
        (_) => {
          this.user.balance = +this.user.balance - +this.withdraw;
          this.withdraw = 0;
          this.withdrawDescription = '';
          this.errors = null;
        },
        (err) => {
          this.errors = err.error.message.join(', ');
        }
      );
  }

  public onTransfer(): void {
    this.walletService
      .transfer(
        this.selectedUser.wallet_id,
        this.transfer,
        this.transferDescription
      )
      .subscribe(
        (_) => {
          this.user.balance = +this.user.balance - +this.transfer;
          this.transfer = 0;
          this.transferDescription = '';
          this.errors = null;
        },
        (err) => {
          this.errors = err.error.message.join(', ');
        }
      );
  }

  public searchUsers(): void {
    this.userService.searchUsers(this.query).subscribe((users) => {
      this.users = users;
    });
  }

  public selectUser($event: any): void {
    this.selectedUser = $event;
  }
}
