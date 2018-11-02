import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router
    ) { }

  ngOnInit() {
  }
  // deleteUser() {
  //   // console.log(this.newUsername);
  //   this._auth.deleteUser().subscribe(
  //     res => {
  //       console.log(res);
  //       localStorage.setItem("token", res.sessionToken);
  //       this._router.navigate(["/welcome"]);
  //     },
  //     err => console.log(err)
  //   );
  // }
}
// material snackbars and accordian