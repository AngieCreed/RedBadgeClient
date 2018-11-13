import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";
import { SnackbarService } from "../shared/snackbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private _router: Router, 
    private _auth: AuthService,
    private _snackBar: SnackbarService
    ) {}
  hasToken: boolean=false;
  token: string=localStorage.getItem("token");
  name: string=localStorage.getItem("firstName");
 
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
    this._snackBar.openSnackBar('Good research leads to great code...see you soon!', 'logoutSuccess', 5000);
    this._auth.userLogout();
  }
}
