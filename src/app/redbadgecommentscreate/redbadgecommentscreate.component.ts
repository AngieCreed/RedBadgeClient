import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { Comment } from "../shared/comment.model";

@Component({
  selector: "app-redbadgecommentscreate",
  templateUrl: "./redbadgecommentscreate.component.html",
  styleUrls: ["./redbadgecommentscreate.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RedbadgecommentscreateComponent implements OnInit {
  newComment: Comment;
  content: string;

  @Output()
  posted = new EventEmitter();
  @Output()
  resetCurrentComment = new EventEmitter();

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
