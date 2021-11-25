import { Injectable } from "@angular/core";
import { cardMock } from "../mock/card.mock";
import { CardModel } from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  private ToCart: CardModel[]=[];
  private activeCart: CardModel[] = [];
  getCards(): CardModel[]{
    return cardMock;
  }
  moveToCart(buyCard: CardModel): void{
      this.ToCart.push({...buyCard, buy: true});
      this.ToCart = this.ToCart.filter((item: CardModel)=>{
        return item.id !== buyCard.id;
      });
  }
  getCartData(): CardModel[]{
    return this.ToCart;
  }
}
