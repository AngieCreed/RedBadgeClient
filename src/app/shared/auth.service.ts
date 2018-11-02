import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { EmailValidator } from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class AuthService {
  private _loginUrl = "http://localhost:3000/user/login";
  private _signUpUrl = "http://localhost:3000/user/signup";

  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, { user: user }, httpOptions);
  }

  signUpUser(user) {
    console.log(user);
    return this.http.post<any>(this._signUpUrl, { user: user }, httpOptions);
  }
}
