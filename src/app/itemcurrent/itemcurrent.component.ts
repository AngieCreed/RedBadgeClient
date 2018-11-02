import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Item } from "../shared/item.model";

@Component({
  selector: "app-itemcurrent",
  templateUrl: "./itemcurrent.component.html",
  styleUrls: ["./itemcurrent.component.scss"]
})
export class ItemcurrentComponent implements OnInit {
  currentName: string;
  currentResource: string;
  currentComment: string;
  selectedItem: Item;

  @Output()
  saved = new EventEmitter();
  @Output()
  cancelled = new EventEmitter();

  @Input()
  set item(obj: Item) {
    if (obj) {
      (this.currentName = obj.title),
        (this.currentResource = obj.resource),
        (this.currentComment = obj.comment);
    }
    this.selectedItem = Object.assign({}, obj);
  }
  constructor() {}

  ngOnInit() {}
}
