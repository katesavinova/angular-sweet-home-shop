import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardsModule } from './components/cards/cards.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartProtectionGuard } from './guards/cart-protection.guard';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    PageNotFoundComponent,
    CardDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardsModule
  ],
  providers: [CartProtectionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
