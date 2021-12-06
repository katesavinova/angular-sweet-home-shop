import { Component, OnInit } from '@angular/core';
import { cardMock } from 'src/app/mock/card.mock';
import { CardModel } from 'src/app/models/card.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cards:CardModel[] = cardMock;
  cartData: CardModel[]= [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  this.cartData = this.cartService.getCartData();
  }

}
