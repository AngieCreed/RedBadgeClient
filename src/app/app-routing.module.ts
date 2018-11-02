import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { GoldbadgeComponent } from "./goldbadge/goldbadge.component";
import { CssComponent } from "./css/css.component";
import { HtmlComponent } from "./html/html.component";
import { JavascriptComponent } from "./javascript/javascript.component";
import { ItemsComponent } from "./items/items.component";
import { EditusernameComponent } from "./editusername/editusername.component";
import { DeleteuserComponent } from "./deleteuser/deleteuser.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "goldbadge", component: GoldbadgeComponent },
  { path: "css", component: CssComponent },
  { path: "html", component: HtmlComponent },
  { path: "javascript", component: JavascriptComponent },
  { path: "items", component: ItemsComponent },
  { path: "editusername", component: EditusernameComponent },
  { path: "deleteuser", component: DeleteuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
