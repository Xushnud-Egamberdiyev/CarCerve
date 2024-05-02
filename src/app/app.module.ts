import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { GlavniComponent } from './companenta/glavni/glavni.component';
import { NavbarComponent } from './companenta/navbar/navbar.component';
import { HammaServicelarComponent } from './companenta/hamma-servicelar/hamma-servicelar.component';

@NgModule({
  declarations: [
    AppComponent,
    UslugaComponent,
    GlavniComponent,
    NavbarComponent,
    HammaServicelarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
