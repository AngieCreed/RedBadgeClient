import { Component, OnInit } from "@angular/core";
import { CommentsService } from "../shared/comments.service";
import { Comment } from "../shared/comment.model";
import { NotificationsService } from "../shared/notifications.service";

@Component({
  selector: "app-redbadgecomments",
  templateUrl: "./redbadgecomments.component.html",
  styleUrls: ["./redbadgecomments.component.scss"]
})
export class RedbadgecommentsComponent implements OnInit {
  comments: Comment[];
  currentComment: Comment;

  constructor(private _cs: CommentsService) {}

  ngOnInit() {
    this.getComments();
    this.resetCurrentComment();
  }

  resetCurrentComment() {
    this.currentComment = { id: null, username: null, content: "" };
  }

  getComments() {
    this._cs.getall().subscribe(comments => {
      this.comments = comments;
    });
    console.log("hello");
  }

  postComment(comment) {
    this._cs.create(comment).subscribe(response => {
      this.getComments();
      this.resetCurrentComment();
    });
  }

  deleteComment(comment) {
    this._cs.delete(comment).subscribe(response => {
      this.getComments();
      this.resetCurrentComment();
    });
  }
}
