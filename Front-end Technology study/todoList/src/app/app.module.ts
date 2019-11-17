import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import {LayoutModule} from './layout/layout.module';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import {TodoService} from './provider/todo.service';
import {CategoryPipe} from './pipes/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,  延迟加载about, 不需要
    TodoComponent,
    CreateTodoComponent,
    TodoListComponent,
    DetailComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
