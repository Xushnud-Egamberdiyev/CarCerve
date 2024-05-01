import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { GlavniComponent } from './companenta/glavni/glavni.component';

@NgModule({
  declarations: [
    AppComponent,
    UslugaComponent,
    GlavniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
