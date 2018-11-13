import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-angular",
  templateUrl: "./angular.component.html",
  styleUrls: ["./angular.component.scss"],
  animations: [
    trigger("slideIn1", [
      transition(":enter", [
        style({ transform: "translateX(700%)" }),
        animate("700ms 700ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn2", [
      transition(":enter", [
        style({ transform: "translateX(700%)" }),
        animate("1300ms 700ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn3", [
      transition(":enter", [
        style({ transform: "translateX(700%)" }),
        animate("1900ms 700ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn4", [
      transition(":enter", [
        style({ transform: "translateX(700%)" }),
        animate("2500ms 700ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ]),
    trigger("slideIn5", [
      transition(":enter", [
        style({ transform: "translateX(700%)" }),
        animate("3100ms 700ms ease-out", style({ transform: "translateY(0%)" }))
      ])
    ])
  ]
})
export class AngularComponent implements OnInit {
  angular = "angular";
  title = "Angular";

  constructor() {}

  ngOnInit() {}
}
