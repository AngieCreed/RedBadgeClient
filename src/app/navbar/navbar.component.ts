import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router, private _auth: AuthService) {}
  hasToken: boolean=false;
  token: string=localStorage.getItem("token");
  
 

  ngOnInit() {
    console.log("this.token, ngOnInit:",this.hasToken);

  }
  showLoginOrLogout() {
    console.log("this.token, first:",this.hasToken);

    this.token=localStorage.getItem("token");

    if(this.token){
      console.log("this.token:",this.token);
      this.hasToken=true;
    } else {
      this.hasToken=false;
    }
  }
  userLogout() {
    this._auth.userLogout();
  }
}
