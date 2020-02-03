import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MeterReadingRoutingModule} from './meter-reading-routing.module';
import {ReadingComponent} from './reading/reading.component';
import {SharedModule} from '../shared/shared.module';
import { ReadingsPageComponent } from './readings-page/readings-page.component';
import { RegisterMetersComponent } from './register-meters/register-meters.component';


@NgModule({
  declarations: [ReadingComponent, ReadingsPageComponent, RegisterMetersComponent],
  imports: [
    CommonModule,
    MeterReadingRoutingModule,
    SharedModule
  ]
})
export class MeterReadingModule {
}
