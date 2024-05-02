import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlavniComponent } from './companenta/glavni/glavni.component';


const routes: Routes = [
  {path : '', component: GlavniComponent},
  {path: 'glavni', component: GlavniComponent},
  {path: '**', component: GlavniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
