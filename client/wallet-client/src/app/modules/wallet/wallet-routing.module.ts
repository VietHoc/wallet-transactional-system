import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guards/auth.guard';
import {MyWalletComponent} from './pages/my-wallet/my-wallet.component';

const routes: Routes = [
  {
    path: '',
    component: MyWalletComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
