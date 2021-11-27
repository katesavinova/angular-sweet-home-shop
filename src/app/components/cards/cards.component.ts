import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { cardMock } from 'src/app/mock/card.mock';
import { cartMock } from 'src/app/mock/cart.mock';
import { CartModel } from 'src/app/models/cart.model';
import { CardsService } from 'src/app/services/cards.service';
import { CartService } from 'src/app/services/cart.service';
import { CardsModule } from './cards.module';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  Title ="Наши товары";

  Cart: CartModel[]= cartMock;
  cards: CardModel[];
  constructor(private cardService: CardsService, private activatedRouter: ActivatedRoute){

  }
  ngOnInit(): void{
    this.cards = this.cardService.getCards();
this.activatedRouter.queryParamMap.subscribe((params)=>{
    const serch = params.get('serch')||'';
    this.cards = this.cardService.getActiveCard(serch);
  });
  }


  addToCart(id: number){
    const buyCard = this.cards.find((card)=>{
      return card.id ===id;
    });
    if(buyCard){
      this.cardService.moveToCart(buyCard);
      this.cards = this.cards.filter((item: CardModel)=>{
        return item.id !==id;
      });
    }
  }
}
