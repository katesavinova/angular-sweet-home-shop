import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
