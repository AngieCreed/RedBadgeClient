import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { EmailValidator } from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
    // Authorization: localStorage.getItem("token")
  })
};

@Injectable()
export class AuthService {
  private _loginUrl = "http://localhost:3000/user/login";

  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, { user: user }, httpOptions);
  }
}
