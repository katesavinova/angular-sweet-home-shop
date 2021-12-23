import { Injectable } from "@angular/core";
import { CardModel } from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private toCart: CardModel[]=[];

  moveToCart(buyCard: CardModel): void{
    this.toCart.push({...buyCard, buy: true});

  }
  getCartData(): CardModel[]{
    return this.toCart;
  }
}
