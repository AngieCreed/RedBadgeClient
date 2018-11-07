import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { EmailValidator } from "@angular/forms";
import { Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
    // Authorization: localStorage.getItem("token")
  })
};

const httpOptionsAuth = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")
  })
};

let id = localStorage.getItem("user.id");

@Injectable()
export class AuthService {
  private id = localStorage.getItem("id");
  private _loginUrl = "http://localhost:3000/user/login";
  private _loginAdminUrl = "http://localhost:3000/user/login/admin";
  private _signUpUrl = "http://localhost:3000/user/signup";
  // private _deleteUsernameUrl = `http://localhost:3000/user/${this.id}/delete`;

  constructor(
    private http: HttpClient, 
    private _router: Router,
    ) {}

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, { user: user }, httpOptions);
  }

  signUpUser(user) {
    console.log(user);
    return this.http.post<any>(this._signUpUrl, { user: user }, httpOptions);
  }

  editUsername(user) {
    let id = localStorage.getItem("id");
    let _updateUsernameUrl = `http://localhost:3000/user/${id}/update`;
    return this.http.put<any>(
      _updateUsernameUrl,
      { user },
      httpOptionsAuth
    );
  }

  deleteUser() {
    let id = localStorage.getItem("id");
    let _deleteUsernameUrl = `http://localhost:3000/user/${id}/delete`;
    console.log("this._deleteUsernameUrl:", _deleteUsernameUrl);
    return this.http.delete<any>(_deleteUsernameUrl, httpOptionsAuth);
  }

  userLogout() {
    // localStorage.clear();
    console.log("in userLogoutttttt");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("userName");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("role");
    this._router.navigate([""]);

    // location.reload();
  }

  loginAdmin(user) {
    return this.http.post<any>(
      this._loginAdminUrl,
      { user: user },
      httpOptions
    );
  }
}
