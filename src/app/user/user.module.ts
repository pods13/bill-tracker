import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {GoogleSigninDirective} from './google-signin.directive';


@NgModule({
  declarations: [LoginPageComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class UserModule {
}
