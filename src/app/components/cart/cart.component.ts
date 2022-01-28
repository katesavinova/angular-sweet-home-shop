import { Component, OnInit,OnDestroy } from '@angular/core';
import { cardMock } from 'src/app/mock/card.mock';
import { CardModel } from 'src/app/models/card.model';
import { CartService } from 'src/app/services/cart.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cards:CardModel[] = cardMock;
  cartData: CardModel[]= [];
  private loadCart: Subscription = new Subscription();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCart = this.cartService.getCartData().subscribe((data: CardModel[]) => this.cartData=data)
  }
  ngOnDestroy(): void {
    this.loadCart.unsubscribe();
  }
}
