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

// let id = localStorage.getItem("user.id");

@Injectable()
export class AuthService {
  private id = localStorage.getItem("id");
  private _loginUrl = "http://localhost:3000/user/login";
  private _loginAdminUrl = "http://localhost:3000/user/login/admin";
  private _signUpUrl = "http://localhost:3000/user/signup";
  private _updateUsernameUrl = `http://localhost:3000/user/${this.id}/update`;
  private _deleteUsernameUrl = `http://localhost:3000/user/${this.id}/delete`;

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
    return this.http.put<any>(
      this._updateUsernameUrl,
      { user },
      httpOptionsAuth
    );
  }

  deleteUser() {
    console.log("this._deleteUsernameUrl:", this._deleteUsernameUrl);
    return this.http.delete<any>(this._deleteUsernameUrl, httpOptionsAuth);
  }

  userLogout() {
    // localStorage.clear();
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
