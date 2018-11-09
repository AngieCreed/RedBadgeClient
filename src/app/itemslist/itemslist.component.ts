import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Item } from "../shared/item.model";
import {
  transition,
  style,
  animate,
  trigger,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-itemslist",
  templateUrl: "./itemslist.component.html",
  styleUrls: ["./itemslist.component.scss"],
  animations: [
    trigger("fadeIn", [
      transition("void => *", [
        query(":enter", style({ opacity: 0 })),

        query(":enter", stagger(400, [animate(3000, style({ opacity: 1 }))]))
      ])
      // transition(':leave', [
      //   animate('0.5s 1s ease-in', style({ transform: 'translateX(-100%)'}))
      // ])
    ])
  ]
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

  ngOnInit() {}
}
