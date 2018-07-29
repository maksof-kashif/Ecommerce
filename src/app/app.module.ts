import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminpenalComponent } from './adminpenal/adminpenal.component';
import { ToysComponent } from './toys/toys.component';
import { FeshionComponent } from './feshion/feshion.component';
import { WatchesComponent } from './watches/watches.component';
import { MensclothsComponent } from './menscloths/menscloths.component';
import { KidsclothsComponent } from './kidscloths/kidscloths.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { DecorationpieceShowpieceComponent } from './decorationpiece-showpiece/decorationpiece-showpiece.component';
import { WomensclothsComponent } from './womenscloths/womenscloths.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminpenalComponent,
    ToysComponent,
    FeshionComponent,
    WatchesComponent,
    MensclothsComponent,
    KidsclothsComponent,
    ElectronicsComponent,
    DecorationpieceShowpieceComponent,
    WomensclothsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
