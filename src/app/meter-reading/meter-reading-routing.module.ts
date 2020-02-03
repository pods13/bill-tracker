import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReadingsPageComponent} from './readings-page/readings-page.component';


const routes: Routes = [
  {path: '', component: ReadingsPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MeterReadingRoutingModule {
}
