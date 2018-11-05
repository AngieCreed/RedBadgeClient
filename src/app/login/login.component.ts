import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { NotificationsService } from "../shared/notifications.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // createLogin: FormGroup;
  // createSignUp: FormGroup;
  loginUserData = {};
  signUpUserData = {};

  constructor(
    // private lp: FormBuilder,
    // private signUp: FormBuilder,
    private _ns: NotificationsService,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    // this.createLogin = this.lp.group({
    //   email: new FormControl(),
    //   password: new FormControl()
    // });
    // this.createSignUp = this.signUp.group({
    //   firstname: new FormControl(),
    //   lastname: new FormControl(),
    //   email: new FormControl(),
    //   username: new FormControl(),
    //   password: new FormControl()
    // });
  }

  loginUser() {
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.sessionToken);
        localStorage.setItem("id", res.user.id);
        localStorage.setItem("userName", res.user.username);
        localStorage.setItem("firstName", res.user.firstname);
        localStorage.setItem("lastName", res.user.lastname);

        this._router.navigate(["/welcome"]);
        // this._ns.emit("Successful Login!");
      },
      err => console.log(err)
    );
  }

  signUpUser() {
    console.log(this.signUpUserData);
    this._auth.signUpUser(this.signUpUserData).subscribe(
      res => {
        this._ns.emit("Successful Login and Account Creation");
        // console.log(res);
        localStorage.setItem("token", res.sessionToken);
        localStorage.setItem("id", res.user.id);
        localStorage.setItem("userName", res.user.username);
        localStorage.setItem("firstName", res.user.firstname);
        localStorage.setItem("lastName", res.user.lastname);
        this._router.navigate(["/welcome"]);
      },
      err => console.log(err)
    );
  }
}


