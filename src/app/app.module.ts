import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./shared/auth.service";
import { ItemsService } from "./shared/items.service";
import { NotificationsService } from "./shared/notifications.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

import { WelcomeComponent } from "./welcome/welcome.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GoldbadgeComponent } from "./goldbadge/goldbadge.component";
import { JavascriptComponent } from "./javascript/javascript.component";
import { HtmlComponent } from "./html/html.component";
import { CssComponent } from "./css/css.component";
import { ItemslistComponent } from "./itemslist/itemslist.component";
import { ItemsComponent } from "./items/items.component";
import { ItemcurrentComponent } from "./itemcurrent/itemcurrent.component";
import { EditusernameComponent } from "./editusername/editusername.component";
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    GoldbadgeComponent,
    JavascriptComponent,
    HtmlComponent,
    CssComponent,
    LoginComponent,
    ItemslistComponent,
    ItemsComponent,
    ItemcurrentComponent,
    EditusernameComponent,
    DeleteuserComponent,
    AccountComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthService, ItemsService, NotificationsService],
  bootstrap: [AppComponent]
})

export class AppModule {}
