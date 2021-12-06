import { Injectable } from "@angular/core";
import { cardMock } from "../mock/card.mock";
import { CardModel } from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private toCart: CardModel[]=[];
  private products: CardModel[] = cardMock;

  moveToCart(buyCard: CardModel): void{
    this.toCart.push({...buyCard, buy: true});
      this.products = this.products.filter((item: CardModel)=>{
        return item.id !== buyCard.id;
      });
  }
  getCartData(): CardModel[]{
    return this.toCart;
  }
}
