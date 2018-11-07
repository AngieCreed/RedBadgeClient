import { Component, Input, OnInit } from "@angular/core";
import { CommentsService } from "../shared/comments.service";
import { Comment } from "../shared/comment.model";
import { NotificationsService } from "../shared/notifications.service";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-redbadgecomments",
  templateUrl: "./redbadgecomments.component.html",
  styleUrls: ["./redbadgecomments.component.scss"]
})
export class RedbadgecommentsComponent implements OnInit {
  comments: Comment[];
  currentComment: Comment;
  currentUsername: string = localStorage.getItem("userName");
  @Input() mLocation: string;
  @Input() title: string;

  constructor(
    private _cs: CommentsService, 
    private _auth: AuthService
    ) {}

  ngOnInit() {
    this.getComments();
    this.resetCurrentComment();
  }

  resetCurrentComment() {
    this.currentComment = { id: null, username: null, content: "" };
  }

  getComments() {
    console.log('mLocation in rbComponents:',this.mLocation)
    this._cs.getall(this.mLocation).subscribe(comments => {
      this.comments = comments;
    });
    console.log("hello");
  }

  postComment(comment) {
    console.log("this.mLocation:",this.mLocation,)
    comment.username = this.currentUsername;
    comment.location = this.mLocation;
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
