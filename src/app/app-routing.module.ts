import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './user/login-page/login-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'readings', loadChildren: () => import('./meter-reading/meter-reading.module').then(m => m.MeterReadingModule)},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
