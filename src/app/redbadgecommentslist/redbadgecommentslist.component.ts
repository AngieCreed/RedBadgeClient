import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Comment } from "../shared/comment.model";

@Component({
  selector: "app-redbadgecommentslist",
  templateUrl: "./redbadgecommentslist.component.html",
  styleUrls: ["./redbadgecommentslist.component.scss"]
})
export class RedbadgecommentslistComponent implements OnInit {
  @Input()
  comments: Comment[];
  @Input()
  getCommentsParent: any;

  @Output()
  deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // this.getCommentsParent();
    // location.reload();
  }
}
