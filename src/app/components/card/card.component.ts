import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() Card: CardModel;
  @Output() add: EventEmitter<number> = new EventEmitter<number>();

  addToCart(): void{
    console.log("clikced");
    this.add.emit(this.Card.id);
  };
  constructor() { }

  ngOnInit(): void {
  }

}
