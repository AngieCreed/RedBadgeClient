import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

import { trigger, transition, style, animate } from "@angular/animations";

import { SnackbarService } from "../shared/snackbar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ transform: "translateY(200%)" }),
        animate("1400ms 500ms ease-out", style({ transform: "translateX(0%)" }))
      ])
    ]),
    trigger("slide", [
      transition(":enter", [
        style({ transform: "translateX(200%)" }),
        animate("1400ms 500ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("fade2", [
      transition("void => *", [
        style({ backgroundColor: "var(--ninth)", opacity: 0 }),
        animate(2500, style({ backgroundColor: "dimgray", opacity: 1 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  // createLogin: FormGroup;
  // createSignUp: FormGroup;
  loginUserData = { email: "", password: "" };
  signUpUserData = {
    lastname: "",
    email: "",
    username: "",
    password: "",
    firstname: ""
  };
  loginAdminData = { email: "", password: "" };

  constructor(
    // private lp: FormBuilder,
    // private signUp: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
    private _snackBar: SnackbarService
  ) {}

  ngOnInit() {
    localStorage.clear();
    // localStorage.removeItem("token");
    // localStorage.removeItem("id");
    // localStorage.removeItem("userName");
    // localStorage.removeItem("firstName");
    // localStorage.removeItem("lastName");
    // localStorage.removeItem("role");
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
    console.log("this.loginUserData.email:", this.loginUserData.email);
    if (!this.loginUserData.email && !this.loginUserData.password) {
      this._snackBar.openSnackBar(
        "Please enter your email and password",
        "loginFail",
        5000
      );
    } else if (!this.loginUserData.password) {
      this._snackBar.openSnackBar(
        "Please enter your password",
        "loginFail",
        5000
      );
    } else if (!this.loginUserData.email) {
      this._snackBar.openSnackBar("Please enter your email", "loginFail", 5000);
    } else {
      this._auth.loginUser(this.loginUserData).subscribe(
        res => {
          console.log(res);
          localStorage.setItem("token", res.sessionToken);
          localStorage.setItem("id", res.user.id);
          localStorage.setItem("userName", res.user.username);
          localStorage.setItem("firstName", res.user.firstname);
          localStorage.setItem("lastName", res.user.lastname);
          localStorage.setItem("role", res.user.role);
          localStorage.setItem("email", res.user.email);
          let welcomeName = localStorage.getItem("firstName");
          this._snackBar.openSnackBar(
            `Login Successful.   Welcome, ${welcomeName}.`,
            "loginSuccess",
            5000
          );
          // this._router.navigate(["/welcome"]);
          window.location.href = "/welcome";
          // this._ns.emit("Successful Login!");
        },

        err =>
          this._snackBar.openSnackBar(
            "Email and/or password are incorrect.",
            "loginFail",
            5000
          )
      );
    }
  }
  signUpUser() {
    console.log(this.signUpUserData);

    this._auth.signUpUser(this.signUpUserData).subscribe(
      res => {
        localStorage.setItem("token", res.sessionToken);
        localStorage.setItem("id", res.user.id);
        localStorage.setItem("userName", res.user.username);
        localStorage.setItem("firstName", res.user.firstname);
        localStorage.setItem("lastName", res.user.lastname);
        localStorage.setItem("role", res.user.role);
        localStorage.setItem("email", res.user.email);
        // this._router.navigate(["/welcome"]);
        window.location.href = "/welcome";
      },
      err => console.log(err)
    );
  }

  loginAdmin() {
    console.log(this.loginAdminData);
    if (!this.loginAdminData.email && !this.loginAdminData.password) {
      this._snackBar.openSnackBar(
        "Please enter your Administrative email and password",
        "loginFail",
        5000
      );
    } else if (!this.loginAdminData.password) {
      this._snackBar.openSnackBar(
        "Please enter your password",
        "loginFail",
        5000
      );
    } else if (!this.loginAdminData.email) {
      this._snackBar.openSnackBar("Please enter your email", "loginFail", 5000);
    } else {
      this._auth.loginAdmin(this.loginAdminData).subscribe(
        res => {
          console.log(res);
          localStorage.setItem("token", res.sessionToken);
          localStorage.setItem("id", res.user.id);
          localStorage.setItem("userName", res.user.username);
          localStorage.setItem("firstName", res.user.firstname);
          localStorage.setItem("lastName", res.user.lastname);
          localStorage.setItem("role", res.user.role);
          localStorage.setItem("email", res.user.email);
          let welcomeName = localStorage.getItem("firstName");
          this._snackBar.openSnackBar(
            `Admin Login Successful.   The Force is strong with ${welcomeName}.`,
            "adminSuccess",
            5000
          );
          // this._router.navigate(["/welcome"]);
          window.location.href = "/welcome";
        },
        err => console.log(err)
      );
    }
  }
}
