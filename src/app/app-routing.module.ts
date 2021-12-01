import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import{CardDetailsComponent} from './components/card-details/card-details.component';
import{CartComponent} from './components/cart/cart.component'
import { CartGuard } from './guards/cart.guard';

const routes: Routes = [
  {path: 'home', component: CardsComponent},
  {path: 'cart', component: CartComponent, canActivate: [CartGuard]},
  {path: 'card/:id', component: CardDetailsComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
