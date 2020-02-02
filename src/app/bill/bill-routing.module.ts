import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BillListComponent} from './bill-list/bill-list.component';
import {AuthGuard} from '../user/auth.guard';


const routes: Routes = [
  {path: '', component: BillListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BillRoutingModule {
}
