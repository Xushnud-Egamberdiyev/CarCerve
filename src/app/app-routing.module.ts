import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UslugaComponent } from './companenta/usluga/usluga.component';
import { HammaServicelarComponent } from './companenta/hamma-servicelar/hamma-servicelar.component';


const routes: Routes = [
  {path:'usluga',component:UslugaComponent},
  {path:'services',component:HammaServicelarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
