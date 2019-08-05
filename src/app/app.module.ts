import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleListComponent } from './component/vehicle-list/vehicle-list.component';
import { VehicleCardComponent } from './component/vehicle-card/vehicle-card.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
