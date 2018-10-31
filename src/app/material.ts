import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule {}
