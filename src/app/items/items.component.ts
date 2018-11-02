import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../shared/items.service";
import { Item } from "../shared/item.model";
import { NotificationsService } from "../shared/notifications.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  items: Item[];
  currentItem: Item;

  constructor(
    private _itemsService: ItemsService,
    private _ns: NotificationsService
  ) {}

  ngOnInit() {
    console.log("hello");
    this.getItems();
    this.resetCurrentItem();
  }

  resetCurrentItem() {
    this.currentItem = { id: null, title: "", resource: "", comment: "" };
  }

  selectItem(item) {
    this.currentItem = item;
  }

  cancel(item) {
    this.resetCurrentItem();
  }

  getItems() {
    this._itemsService.getall().subscribe(items => {
      this.items = items;
    });
    console.log("hello");
  }

  saveItem(item) {
    if (!item.id) {
      this.createItem(item);
    } else {
      this.updateItem(item);
    }
  }

  createItem(item) {
    this._itemsService.create(item).subscribe(response => {
      this._ns.emit("Item created!");
      this.getItems();
      this.resetCurrentItem();
    });
  }

  updateItem(item) {
    this._itemsService.update(item).subscribe(response => {
      // this.ns.emit("Item saved!");
      this.getItems();
      this.resetCurrentItem();
    });
  }

  deleteItem(item) {
    this._itemsService.delete(item).subscribe(response => {
      // this.ns.emit("Item deleted!");
      this.getItems();
      this.resetCurrentItem();
    });
  }
}