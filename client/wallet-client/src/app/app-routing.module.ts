import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'my-wallet',
    loadChildren: () =>
      import('./modules/wallet/wallet.module').then((m) => m.WalletModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./modules/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'stocks',
    loadChildren: () =>
      import('./modules/stock/stock.module').then((m) => m.StockModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
