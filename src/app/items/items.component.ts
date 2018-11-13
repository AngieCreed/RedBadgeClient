import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../shared/items.service";
import { Item } from "../shared/item.model";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  items: Item[];
  currentItem: Item;
  id: string = localStorage.getItem("id");

  constructor(private _itemsService: ItemsService) {}

  ngOnInit() {
    this.getItems(this.id);
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

  getItems(id) {
    this._itemsService.getall(id).subscribe(items => {
      this.items = items;
    });
  }

  saveItem(item) {
    if (!item.id) {
      this.createItem(item);
    } else {
      this.updateItem(item);
    }
  }

  createItem(item) {
    item.userId = this.id;
    this._itemsService.create(item).subscribe(response => {
      this.getItems(this.id);
      this.resetCurrentItem();
    });
  }

  updateItem(item) {
    this._itemsService.update(item).subscribe(response => {
      this.getItems(this.id);
      this.resetCurrentItem();
    });
  }

  deleteItem(item) {
    this._itemsService.delete(item).subscribe(response => {
      this.getItems(this.id);
      this.resetCurrentItem();
    });
  }
}
