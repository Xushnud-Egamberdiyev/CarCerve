import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlavniComponent } from './companenta/glavni/glavni.component';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { HammaServicelarComponent } from './companenta/hamma-servicelar/hamma-servicelar.component';

const routes: Routes = [
  {path : '', component: GlavniComponent},
  {path: 'glavni', component: GlavniComponent},
  {path:'usluga',component:UslugaComponent},
  {path:'services',component:HammaServicelarComponent},
  {path: '**', component: GlavniComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
