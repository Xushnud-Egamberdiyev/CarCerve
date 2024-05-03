import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { GlavniComponent } from './companenta/glavni/glavni.component';
import { NavbarComponent } from './companenta/navbar/navbar.component';
import { HammaServicelarComponent } from './companenta/hamma-servicelar/hamma-servicelar.component';
import { KategoriyaComponent } from './companenta/glavni/glavniComent/kategori/kategoriya/kategoriya.component';
import { BrendPloshadki1920Component } from './companenta/brend-ploshadki-1920/brend-ploshadki-1920.component';
import { KartochkaBrendComponent } from './companenta/kartochka-brend/kartochka-brend.component';
import { FooterComponent } from './companenta/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UslugaComponent,
    GlavniComponent,
    NavbarComponent,
    HammaServicelarComponent,
    UslugaComponent,
    KategoriyaComponent,
    BrendPloshadki1920Component,
    KartochkaBrendComponent
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
