import { Injectable } from "@angular/core";
import { cardMock } from "../mock/card.mock";
import { CardModel } from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  private ToCart: CardModel[]=[];
  private activeCart: CardModel[] = cardMock;
  getCards(): CardModel[]{
    return this.activeCart;
  }
  getCard(id: number): CardModel | null{
     const activeCard = this.activeCart.filter((item: CardModel)=>{
      return item.id === id;
    });
    if(activeCard){
      return activeCard;
    }else{
        const archivedCard = this.ToCart.filter((item: CardModel)=>{
          return item.id === id;
      });
      return archivedCard ? activeCard: null;
    }
  }

  moveToCart(buyCard: CardModel): void{
      this.ToCart.push({...buyCard, buy: true});
      this.activeCart = this.activeCart.filter((item: CardModel)=>{
        return item.id !== buyCard.id;
      });
  }
  getCartData(): CardModel[]{
    return this.ToCart;
  }
}
