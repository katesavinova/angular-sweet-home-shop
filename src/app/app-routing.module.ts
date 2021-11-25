import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

const routes: Routes = [
  {
    path: 'home', component: CardsComponent
  },
  {
    path: 'cart', component: PopUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
