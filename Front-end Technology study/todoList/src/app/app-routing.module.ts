import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {AboutComponent} from './about/about.component';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'todo/:id', component: DetailComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}, // 延迟加载about
  {path: '', redirectTo: 'todo', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
