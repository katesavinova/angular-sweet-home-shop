import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cardMock } from 'src/app/mock/card.mock';
import { CardModel } from 'src/app/models/card.model';
import { CartModel } from 'src/app/models/cart.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  Cards:CardModel[] = cardMock;
  Card: CardModel[]= [];
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  this.Card = this.cardsService.getCartData();
  }
  @Output() close: EventEmitter<void>= new EventEmitter<void>();
  popupClose():void{
    this.close.emit();
  }

}
