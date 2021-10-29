import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { MyWalletComponent } from './pages/my-wallet/my-wallet.component';


@NgModule({
  declarations: [
    MyWalletComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
