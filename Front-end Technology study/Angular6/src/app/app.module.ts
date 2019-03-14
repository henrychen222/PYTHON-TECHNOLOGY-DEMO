import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'  // Routing  3.3 afternoon 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { MyserviceService } from './myservice.service';

// Http Service
import { HttpModule } from '@angular/http';  
// Http Client 3.11 evening
import { HttpClientModule } from '@angular/common/http'; 
//Animations 3.12 afternoon
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Forms: Template Driven Form  3.11 evening
import { FormsModule } from '@angular/forms';
//Forms: Model Driven Form
import { ReactiveFormsModule } from '@angular/forms';
//Materials   3.12 afternoon
import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material'
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

/* 
Module in Angular refers to a place 
where you can group the components, directives, pipes, and services, which are related to the application

declarations: It is an array of components created. 
If any new component gets created, it will be imported first 
and the reference will be included in declarations

Providers: This will include the services created.
Imports: It is an array of modules required to be used in the application
Bootstrap: This includes the main app component for starting the execution.
*/
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,  // here it is added in declarations and will behave as a child component
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    //3.3 afternoon library
    RouterModule.forRoot([
      {
        path: 'new-cmp',
        component: NewCmpComponent
      }
    ]),
    HttpModule,  //Http Service
    HttpClientModule,  // Http Client  3.11 evening 
    FormsModule,  //Forms: Template Driven Form   3.11 evening 
    ReactiveFormsModule, //Forms: Model Driven Form   3.11 evening 
    BrowserAnimationsModule,  // Animations 
    //materials  3.12 night
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    AppRoutingModule //for bootstrap the AppComponent the main app component is given
  ],
  // include the service   3.3 afternoon library
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
