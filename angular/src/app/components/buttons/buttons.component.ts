import { Component } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent {
  radioModel = 1;
  model = {
    left: true,
    middle: false,
    right: false
  };
}
