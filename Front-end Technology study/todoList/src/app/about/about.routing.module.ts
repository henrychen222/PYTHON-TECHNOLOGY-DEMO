/** 课时12 延迟加载about */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about.component';

const aboutRoutes: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule {
}
