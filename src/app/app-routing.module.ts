import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDitailsComponent } from './components/card-ditails/card-ditails.component';
import { CardsComponent } from './components/cards/cards.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

const routes: Routes = [
  {path: 'home', component: CardsComponent},
  {path: 'cart', component: PopUpComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'card/:id', component: CardDitailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
