import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-css",
  templateUrl: "./css.component.html",
  styleUrls: ["./css.component.scss"],
  animations: [
    trigger("slideIn1", [
      transition(":enter", [
        style({ transform: "translateX(160%)" }),
        animate("800ms ease-in", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn2", [
      transition(":enter", [
        style({ transform: "translateX(160%)" }),
        animate("1400ms ease-in", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn3", [
      transition(":enter", [
        style({ transform: "translateX(160%)" }),
        animate("2000ms ease-in", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn4", [
      transition(":enter", [
        style({ transform: "translateX(160%)" }),
        animate("2600ms ease-in", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn5", [
      transition(":enter", [
        style({ transform: "translateX(160%)" }),
        animate("3200ms ease-in", style({ transform: "translateY(0%)" }))
      ])
    ])
  ]
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
