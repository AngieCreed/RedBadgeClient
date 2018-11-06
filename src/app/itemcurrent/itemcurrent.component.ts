import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { Item } from "../shared/item.model";

@Component({
  selector: "app-itemcurrent",
  templateUrl: "./itemcurrent.component.html",
  styleUrls: ["./itemcurrent.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ItemcurrentComponent implements OnInit {
  currentName: string;
  currentResource: string;
  currentComment: string;
  selectedItem: Item;
  currentId: string = localStorage.getItem("id");

  @Output()
  saved = new EventEmitter();
  @Output()
  cancelled = new EventEmitter();

  @Input()
  set item(obj: Item) {
    if (obj) {
      (this.currentName = obj.title),
        (this.currentResource = obj.resource),
        (this.currentComment = obj.comment),
        (this.currentId = obj.userId);
    }
    this.selectedItem = Object.assign({}, obj);
    console.log(this.selectedItem);
  }
  constructor() {}

  ngOnInit() {}
}
