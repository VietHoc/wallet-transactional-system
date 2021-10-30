import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Wallet} from 'src/app/models/wallet.model';
import {TeamService} from 'src/app/services/team.service';
import {WalletService} from 'src/app/services/wallet.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  public transfer = 0;
  public transferDescription = '';
  public query = '';
  public teams: any[] = [];
  public wallets: any[] = [];
  public selectedTeam: any = null;
  public selectedWallet: Wallet = new Wallet();
  public errors = '';
  constructor(
    private teamService: TeamService,
    private walletService: WalletService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  public onTransfer(): void {
    this.walletService
      .transfer(
        this.selectedWallet?.id,
        this.transfer,
        this.transferDescription,
        this.selectedTeam?.wallet_id
      )
      .subscribe(
        (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'SUCCESS',
            detail: res.message,
          });
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
        this.selectedTeam?.wallet_id,
        this.selectedTeam?.wallet_id
      )
      .subscribe(
        (res) => {
          this.selectedTeam.balance =
            +this.selectedTeam.balance + +this.transfer;
          this.transferDescription = '';
          this.errors = '';
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

  public onWithdraw(): void {
    this.walletService
      .withdraw(
        this.transfer,
        this.transferDescription,
        this.selectedTeam?.wallet_id,
        this.selectedTeam?.wallet_id
      )
      .subscribe(
        (res) => {
          this.selectedTeam.balance =
            +this.selectedTeam.balance - +this.transfer;
          this.transferDescription = '';
          this.errors = '';
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
}
