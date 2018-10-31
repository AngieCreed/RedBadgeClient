import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  createLogin: FormGroup;
  loginUserData = {};

  constructor(
    private lp: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.createLogin = this.lp.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  loginUser() {
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.sessionToken);
        this._router.navigate(["/home"]);
      },
      err => console.log(err)
    );
  }
}
