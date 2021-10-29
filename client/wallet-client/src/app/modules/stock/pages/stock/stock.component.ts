import {Component, OnInit} from '@angular/core';
import {Wallet} from 'src/app/models/wallet.model';
import {StockService} from 'src/app/services/stock.service';
import {WalletService} from 'src/app/services/wallet.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  public transfer = 0;
  public transferDescription = '';
  public query = '';
  public stocks: any[] = [];
  public wallets: any[] = [];
  public selectedStock: any = null;
  public selectedWallet: Wallet = new Wallet();
  public errors = '';
  constructor(
    private stockService: StockService,
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((stocks) => {
      this.stocks = stocks;
    });
  }

  public onTransfer(): void {
    this.walletService
      .transfer(
        this.selectedWallet?.id,
        this.transfer,
        this.transferDescription,
        this.selectedStock?.wallet_id
      )
      .subscribe(
        (res) => {
          window.location.reload();
        },
        (err) => {
          this.errors = err.error.message?.join(', ') || err.error.error;
        }
      );
  }

  public searchWallets(): void {
    this.walletService.searchWallets(this.query).subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

  public selectWallet(wallet: Wallet): void {
    this.selectedWallet = wallet;
  }

  public onDeposit(): void {
    this.walletService
      .deposit(
        this.transfer,
        this.transferDescription,
        this.selectedStock?.wallet_id,
        this.selectedStock?.wallet_id
      )
      .subscribe(
        (_) => {
          this.selectedStock.balance =
            +this.selectedStock.balance + +this.transfer;
          this.transferDescription = '';
          this.errors = '';
        },
        (err) => {
          this.errors = err.error.message?.join(', ') || err.error.error;
        }
      );
  }

  public onWithdraw(): void {
    this.walletService
      .withdraw(
        this.transfer,
        this.transferDescription,
        this.selectedStock?.wallet_id,
        this.selectedStock?.wallet_id
      )
      .subscribe(
        (_) => {
          this.selectedStock.balance =
            +this.selectedStock.balance - +this.transfer;
          this.transferDescription = '';
          this.errors = '';
        },
        (err) => {
          this.errors = err.error.message?.join(', ') || err.error.error;
        }
      );
  }
}
