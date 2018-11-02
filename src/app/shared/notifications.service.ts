import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NotificationsService {
  private _subject = new Subject();
  notifications$ = this._subject.asObservable();

  emit(notification) {
    this._subject.next(notification);
  }
}
