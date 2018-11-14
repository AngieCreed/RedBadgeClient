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
import { AccountComponent } from "./account/account.component";
import { RedbadgeComponent } from "./redbadge/redbadge.component";
import { AngularComponent } from "./angular/angular.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "welcome", component: WelcomeComponent, canActivate: [AuthGuard] },
  {
    path: "goldbadge",
    component: GoldbadgeComponent,
    canActivate: [AuthGuard]
  },
  { path: "css", component: CssComponent, canActivate: [AuthGuard] },
  { path: "html", component: HtmlComponent, canActivate: [AuthGuard] },
  {
    path: "javascript",
    component: JavascriptComponent,
    canActivate: [AuthGuard]
  },
  { path: "items", component: ItemsComponent, canActivate: [AuthGuard] },
  {
    path: "editusername",
    component: EditusernameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "deleteuser",
    component: DeleteuserComponent,
    canActivate: [AuthGuard]
  },
  { path: "account", component: AccountComponent, canActivate: [AuthGuard] },
  { path: "redbadge", component: RedbadgeComponent, canActivate: [AuthGuard] },
  { path: "angular", component: AngularComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
