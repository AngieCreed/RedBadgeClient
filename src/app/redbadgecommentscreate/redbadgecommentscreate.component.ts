import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Comment } from "../shared/comment.model";

@Component({
  selector: "app-redbadgecommentscreate",
  templateUrl: "./redbadgecommentscreate.component.html",
  styleUrls: ["./redbadgecommentscreate.component.scss"]
})
export class RedbadgecommentscreateComponent implements OnInit {
  newComment: Comment;
  content: string;

  @Output()
  posted = new EventEmitter();

  @Input()
  set currentComment(obj: Comment) {
    if (obj) {
      this.content = obj.content;
    }
    this.newComment = Object.assign({}, obj);
  }

  constructor() {}

  ngOnInit() {}
}
