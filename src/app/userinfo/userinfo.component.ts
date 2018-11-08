import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  constructor() { }
firstName = localStorage.getItem("firstName");
lastName = localStorage.getItem("lastName");
username = localStorage.getItem("username");
  ngOnInit() {
  }

}
