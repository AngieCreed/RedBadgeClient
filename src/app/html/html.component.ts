import { Component, OnInit } from "@angular/core";
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-html",
  templateUrl: "./html.component.html",
  styleUrls: ["./html.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-120%)" }),
        animate("800ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut2", [
      transition(":enter", [
        style({ transform: "translateY(-120%)" }),
        animate("1400ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut3", [
      transition(":enter", [
        style({ transform: "translateY(-120%)" }),
        animate("2000ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut4", [
      transition(":enter", [
        style({ transform: "translateY(-120%)" }),
        animate("2600ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut5", [
      transition(":enter", [
        style({ transform: "translateY(-120%)" }),
        animate("3200ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ])
  ]
})
export class HtmlComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
