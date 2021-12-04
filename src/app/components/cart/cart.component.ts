import { Component, OnInit } from '@angular/core';
import { cardMock } from 'src/app/mock/card.mock';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cards:CardModel[] = cardMock;
  cartData: CardModel[]= [];
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  this.cartData = this.cardsService.getCartData();
  }

}
