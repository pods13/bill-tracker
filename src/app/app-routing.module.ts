import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './user/auth.guard';
import {LoginPageComponent} from './user/login-page/login-page.component';
import {ProfilePageComponent} from './user/profile-page/profile-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'bills', loadChildren: () => import('./bill/bill.module').then(m => m.BillModule)},
  {path: '**', redirectTo: 'profile'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
