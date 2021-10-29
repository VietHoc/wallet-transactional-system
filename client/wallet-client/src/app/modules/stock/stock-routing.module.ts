import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guards/auth.guard';
import {StockComponent} from './pages/stock/stock.component';

const routes: Routes = [
  {
    path: '',
    component: StockComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
