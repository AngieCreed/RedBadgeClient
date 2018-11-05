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
  @Input()
  getItemsParent: any;

  @Output()
  selected = new EventEmitter();
  @Output()
  deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // this.getItemsParent();
  }
}
