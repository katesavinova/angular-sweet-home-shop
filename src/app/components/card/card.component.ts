import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardModel;
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.cardsService.moveToCart(this.card);
  }
}
