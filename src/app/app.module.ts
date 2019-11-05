import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppPost } from "../Post/post.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, AppPost],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
