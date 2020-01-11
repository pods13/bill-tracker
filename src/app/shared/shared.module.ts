import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShellComponent} from './shell/shell.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  CommonModule,
  MatSidenavModule,
  LayoutModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [ShellComponent],
  imports: [
    ...modules
  ],
  exports: [
    ShellComponent,
    ...modules
  ]
})
export class SharedModule {
}
