import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule} from '../app-routing.module';
import { BtnComponent } from './btn/btn.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [NavComponent, BtnComponent],
  exports: [NavComponent, BtnComponent]
})
export class LayoutModule {
}
