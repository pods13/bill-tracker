import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillRoutingModule} from './bill-routing.module';
import {BillListComponent} from './bill-list/bill-list.component';
import {BillComponent} from './bill/bill.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [BillListComponent, BillComponent],
  imports: [
    CommonModule,
    BillRoutingModule,
    SharedModule
  ]
})
export class BillModule {
}
