import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-javascript",
  templateUrl: "./javascript.component.html",
  styleUrls: ["./javascript.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-180%)" }),
        animate("800ms 500ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut2", [
      transition(":enter", [
        style({ transform: "translateY(-180%)" }),
        animate("1400ms 500ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut3", [
      transition(":enter", [
        style({ transform: "translateY(-180%)" }),
        animate("2000ms 500ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut4", [
      transition(":enter", [
        style({ transform: "translateY(-180%)" }),
        animate("2600ms 500ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideInOut5", [
      transition(":enter", [
        style({ transform: "translateY(-180%)" }),
        animate("3200ms 500ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ])
  ]
})
export class JavascriptComponent implements OnInit {
  js = "js";
  title = "JavaScript";
  constructor() {}

  ngOnInit() {}
}
