import { Component, OnInit } from '@angular/core';  // here angular/core is imported
import { MyserviceService } from '../myservice.service';

@Component({
  // this is a declarator which starts with @ sign. 
  selector: 'app-new-cmp', // The component word marked in bold needs to be the same.
  templateUrl: './new-cmp.component.html', // reference to the html file created in the new component.
  styleUrls: ['./new-cmp.component.css']  // reference to the style file
})
export class NewCmpComponent implements OnInit {
  //added one variable, show in the .html 
  newcomponent = "Entered in new component created"

  //use Service
  todaydate;
  newcomponentproperty;
  constructor(private myservice: MyserviceService) { }

  //ngOnInit is called by default when the class is executed
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
