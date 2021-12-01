import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { cardMock } from 'src/app/mock/card.mock';
import { CardModel } from 'src/app/models/card.model';
import { CartModel } from 'src/app/models/cart.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cards:CardModel[] = cardMock;
  card: CardModel[]= [];
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  this.card = this.cardsService.getCartData();
  }

}
