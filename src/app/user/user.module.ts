import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {GoogleSigninDirective} from './google-signin.directive';
import {ProfilePageComponent} from './profile-page/profile-page.component';


@NgModule({
  declarations: [LoginPageComponent, ProfilePageComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginPageComponent,
    ProfilePageComponent
  ]
})
export class UserModule {
}
