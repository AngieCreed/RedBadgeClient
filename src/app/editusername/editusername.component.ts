import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private _router: Router,
    private editSnackbar: MatSnackBar) {}
    currentUserName: string = '';

  ngOnInit() {
    this.currentUserName = localStorage.getItem("userName");
  }

  editUsername() {
    if(this.user.username){
    localStorage.setItem("userName", this.user.username);
    this._auth.editUsername(this.user).subscribe(
      res => {
        console.log(res);
        let displayUsername=localStorage.getItem("userName")
        this.editSnackbar.open(`New Username: ${displayUsername}`,"OK", {duration: 3000})
        this._router.navigate(["/welcome"]);
      },
      err => console.log(err)
    );
  }
}
}   
 