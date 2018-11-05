import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})

export class DeleteuserComponent implements OnInit {
  confirmDeleteShow = false;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    ) { }

  ngOnInit() {
  }
  deleteButton() {
    console.log('confirmDeleteShow:',this.confirmDeleteShow)
    this.confirmDeleteShow = !this.confirmDeleteShow;
    console.log('confirmDeleteShow:',this.confirmDeleteShow)

  }
  deleteUser() {
    this._auth.deleteUser().subscribe(
      res => {
        console.log(res);
        this._router.navigate(["/"]);
      },
      err => console.log(err)
    );
  }
}

// material snackbars and accordian