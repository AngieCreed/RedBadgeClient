import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
    firstName=localStorage.getItem("firstName");
    lastName=localStorage.getItem("lastName");
    userName=localStorage.getItem("userName");

  ngOnInit() {
  }
}
