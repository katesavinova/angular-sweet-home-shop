import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CartService } from 'src/app/services/cart.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardModel;
  @Output() transferToCards = new EventEmitter<CardModel>()
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(card:CardModel){
    this.transferToCards.emit(card);
    // this.cartService.moveToCart(this.card).subscribe(
    //   (byCart)=>{
    //    // this.card=byCart;
    //   }
    // )
  }
}
