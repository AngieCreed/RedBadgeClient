import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  // user = {
  //   username: ""
  // };

  constructor(
    // private _auth: AuthService,
    // private _router: Router
  ) { }

  ngOnInit() {}

  // editUsername() {
  //   // console.log(this.newUsername);
  //   this._auth.editUsername(this.user).subscribe(
  //     res => {
  //       console.log(res);
  //       // localStorage.setItem("token", res.sessionToken);
  //       this._router.navigate(["/welcome"]);
  //     },
  //     err => console.log(err)
  //   );
  // }
  //   deleteUser() {
  //   // console.log(this.newUsername);
  //   this._auth.deleteUser().subscribe(
  //     res => {
  //       console.log(res);
  //       this._router.navigate(["/welcome"]);
  //     },
  //     err => console.log(err)
  //   );
  // }
}
