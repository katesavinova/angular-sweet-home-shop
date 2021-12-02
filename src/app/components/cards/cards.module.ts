import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CardsComponent } from './cards.component';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  declarations: [
   CardComponent,
   CardsComponent,
   CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CardsModule],
  exports: [CardsComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class CardsModule { }
