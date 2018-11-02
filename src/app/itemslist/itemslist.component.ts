import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Item } from "../shared/item.model";

@Component({
  selector: "app-itemslist",
  templateUrl: "./itemslist.component.html",
  styleUrls: ["./itemslist.component.scss"]
})
export class ItemslistComponent implements OnInit {
  @Input()
  items: Item[];

  @Output()
  selected = new EventEmitter();
  @Output()
  deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // this.getListItems();
  }

  // getListItems() {
  //   return this.items ? this.items : null;
  // }
}
