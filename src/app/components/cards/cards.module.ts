import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CardsComponent } from './cards.component';

@NgModule({
  declarations: [
   CardComponent,
   CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CardsModule],
  exports: [CardsComponent],
  bootstrap: [AppComponent]
})
export class CardsModule { }
