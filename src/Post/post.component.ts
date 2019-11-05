import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class AppPost {
  @Input() title: string;
  @Input() content: string;
  @Input() id: number;
  @Output() idS;
  loveIts = 0;
  created_at: Date;

  constructor() {
    this.created_at = new Date();
  }

  getLI() {
    return this.loveIts;
  }

  getColor() {
    if (this.loveIts > 0) {
      return "#00FF00";
    } else if (this.loveIts < 0) {
      return "#FF1111";
    } else {
      return "grey";
    }
  }

  onLike() {
    this.loveIts += 1;
  }

  onDislike() {
    this.loveIts -= 1;
  }

  onSupp() {
    console.log("rien ne se passe");
  }
}
