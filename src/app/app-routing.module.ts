import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlavniComponent } from './companenta/glavni/glavni.component';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { HammaServicelarComponent } from './companenta/hamma-servicelar/hamma-servicelar.component';
import { NavbarComponent } from './companenta/navbar/navbar.component';
import { BrendPloshadki1920Component } from './companenta/brend-ploshadki-1920/brend-ploshadki-1920.component';
import { KartochkaBrendComponent } from './companenta/kartochka-brend/kartochka-brend.component';

const routes: Routes = [
  {path : '', component: GlavniComponent},
  {path: 'glavni', component: GlavniComponent},
  {path:'usluga',component: UslugaComponent},
  {path:'services',component:HammaServicelarComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'ploshadki', component: BrendPloshadki1920Component},
  {path: 'kartochka-brend', component: KartochkaBrendComponent},
  {path: '**', component: GlavniComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
