import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
<!--    <p>-->
<!--      nav works!-->
<!--    </p>-->
    <ul>
        <li routerLink='about' routerLinkActive="active">todo</li>
        <li routerLink='todo' routerLinkActive="active">about</li>
    </ul>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
