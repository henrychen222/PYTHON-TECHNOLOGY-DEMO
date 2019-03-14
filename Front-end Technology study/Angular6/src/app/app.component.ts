import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';  //Service
//Http Service
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';  //Http Client

//Forms: Model Driven Forms
import { FormGroup, FormControl } from '@angular/forms';
// Form Validation
import { Validators } from '@angular/forms'
//Animation  3.12 afternoon
import { trigger, state, style, transition, animate } from '@angular/animations';

//The @Component uses the templateUrl called app.component.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //Animation
  animations: [
    trigger('myanimation', [
      state('smaller', style({
        transform: 'translateY(100px)'
      })),
      state('larger', style({
        transform: 'translateY(0px)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  //Animation
  state: string = "smaller";
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }

  //Materials  3.12 night 
  myData: Array<any>;

  // Service  3.3 afternoon 
  today_date;
  componentproperty;

  //Http service Http Client  Forms  3.11 evening 
  http_service_data;
  http_client_data;
  model_driven_formdata;
  email_id;
  password;
  model_driven_formdata_validate;
  email_id_validate;
  password_validate;

  constructor(private myservice: MyserviceService, private http: Http, private http_client: HttpClient) { }

  ngOnInit() {
    //Service
    this.today_date = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created";  // value is changed.
    this.componentproperty = this.myservice.serviceproperty;

    /* Http Service*/
    // print the data in browser console
    this.http.get("http://jsonplaceholder.typicode.com/users")
      .pipe(map((response) => response.json()))
      .subscribe((data) => console.log(data));
    // show the data in the brower
    this.http.get("http://jsonplaceholder.typicode.com/users")
      .pipe(map((response) => response.json()))
      .subscribe((data) => this.display_httpservice_data(data));

    /* Http Client  (3.11 evening)  fetch the data: use get API: this.http_client.get() */
    // print the data in browser console
    this.http_client.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => console.log(data))
    // show the data in the brower
    this.http_client.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => this.display_httpclient_data(data));

    //model driven form  3.11 evening
    // [formGroup]="model_driven_formdata"
    this.model_driven_formdata = new FormGroup({
      /* initialize */
      emailid: new FormControl("henrychen940822@gmail.com"),
      passwd: new FormControl("weichen123")
    });

    //model driven form validation   3.11 evening
    this.model_driven_formdata_validate = new FormGroup({
      /* validation */
      emailid_validate: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd_validate: new FormControl("")
    });

  }

  //3.11 evening  fixed 
  display_httpservice_data(data) {
    // data = this.httpdata;  failed
    this.http_service_data = data;
  }

  //3.11 evening 
  display_httpclient_data(data) {
    this.http_client_data = data;
  }

  //Forms: Template Driven Form   3.11 evening
  onClickSubmit_template(data) {
    alert("Entered Email id : " + data.emailid);
    alert("Entered Email password : " + data.passwd);
  }

  //Model Driven Form   3.11 evening
  onClickSubmit_model(data) {
    this.email_id = data.emailid;
    this.password = data.passwd;
  }

  //Model Driven Form: Form validation  3.11 evening
  onClickSubmit_model_validate(data) {
    this.email_id_validate = data.emailid_validate;
    this.password_validate = data.passwd_validate;
  }

  // this title value will be shown in app.component.html file, called binding
  title = 'Angular';
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  isavailable = true;    // if, if then else
  // isavailable = false;      // if else

  // Event Binding  3.1
  myClickFunction($event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("buttion is clicked");
    console.log("event")

    //Templates
    this.isavailable = false;
  }

  // Event Binding
  changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
    alert("Changed month from the Dropdown");
  }

  // Pipes
  todaydate = new Date();
  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months_pipes = ["Jan", "Feb", "Mar", "April", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

}
