import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Comment } from "../shared/comment.model";

@Component({
  selector: "app-redbadgecommentslist",
  templateUrl: "./redbadgecommentslist.component.html",
  styleUrls: ["./redbadgecommentslist.component.scss"]
})
export class RedbadgecommentslistComponent implements OnInit {
  role: string = localStorage.getItem("role");
  @Input()
  comments: Comment[];
  @Input() title: string;

  @Output()
  deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  isAdmin() {
    if (this.role === "admin") return true;
    else return false;
  }
}
