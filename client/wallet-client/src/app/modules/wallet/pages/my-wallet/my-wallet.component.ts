import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/models/user.models';
import {Wallet} from 'src/app/models/wallet.model';
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
  public amount = 0;
  public depositDescription = '';
  public withdrawDescription = '';
  public transferDescription = '';
  public amountDescription = '';
  public query = '';
  public users: User[] = [];
  public selectedUser: User = new User();
  public wallets: any[] = [];
  public selectedWallet: Wallet = new Wallet();
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
        this.errors = err.error.message?.join(', ') || err.error.error;
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
          this.errors = err.error.message?.join(', ') || err.error.error;
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
          this.errors = err.error.message?.join(', ') || err.error.error;
        }
      );
  }

  public onTransferWallet(): void {
    this.walletService
      .transfer(this.selectedWallet?.id, this.amount, this.transferDescription)
      .subscribe(
        (res) => {
          this.user.balance = +this.user.balance - +this.amount;
          this.amount = 0;
          this.amountDescription = '';
          this.errors = null;
        },
        (err) => {
          this.errors = err.error.message?.join(', ') || err.error.error;
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

  public searchWallets(): void {
    this.walletService.searchWallets(this.query).subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

  public selectWallet(wallet: Wallet): void {
    this.selectedWallet = wallet;
  }
}
