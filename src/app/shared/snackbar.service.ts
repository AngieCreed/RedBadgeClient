import { Component, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  openSnackBar(message: string, pClass: string, duration: number) {
    let config = new MatSnackBarConfig();
    config.panelClass = [`${pClass}`];
    config.duration = duration;
    this._snackBar.open(message, '', config);
  }

  constructor(
    private _snackBar: MatSnackBar
  ) { }
}
