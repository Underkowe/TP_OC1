import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  titre = "Posts";
  i = 0;
  @Input() titreAjout: string;
  @Input() contenuAjout: string;

  listPost = [];

  onAjout() {
    this.listPost[this.i] = {
      title: this.titreAjout,
      content: this.contenuAjout,
      id: this.i
    };
    this.i++;
  }

  onToutSupp() {
    this.listPost = [];
    this.i = 0;
  }
}
