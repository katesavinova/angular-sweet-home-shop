import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { cardMock } from 'src/app/mock/card.mock';
import { cartMock } from 'src/app/mock/cart.mock';
import { CartModel } from 'src/app/models/cart.model';
import { CardsService } from 'src/app/services/cards.service';
import { CartService } from 'src/app/services/cart.service';
import { CardsModule } from './cards.module';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  Title ="Наши товары";

  Cart: CartModel[]= cartMock;
  Cards: CardModel[];
  constructor(private cardService: CardsService){

  }
  ngOnInit(): void{

    this.Cards = this.cardService.getCards();

  }


  addToCart(id: number){
    const buyCard = this.Cards.find((card)=>{
      return card.id ===id;
    });
    if(buyCard){
      this.cardService.moveToCart(buyCard);
      this.Cards = this.Cards.filter((item: CardModel)=>{
        return item.id !==id;
      });
    }
  }
}
