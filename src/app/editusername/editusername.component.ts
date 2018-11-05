import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-editusername",
  templateUrl: "./editusername.component.html",
  styleUrls: ["./editusername.component.scss"]
})
export class EditusernameComponent implements OnInit {
  user = {
    username: ""
  };

  constructor(
    private _auth: AuthService, 
    private _router: Router) {}
    currentUserName: string = '';

  ngOnInit() {
    this.currentUserName = localStorage.getItem("userName");
    console.log('editUsername:',this.currentUserName);
  }

  editUsername() {
    console.log("in editUsername editUsername:",this.currentUserName);
    console.log("in editUsername this.user:",this.user);
    localStorage.setItem("userName", this.user.username);
    this._auth.editUsername(this.user).subscribe(
      res => {
        console.log(res);
        // localStorage.setItem("token", res.sessionToken);
        this._router.navigate(["/welcome"]);
      },
      err => console.log(err)
    );
  }
}   
 