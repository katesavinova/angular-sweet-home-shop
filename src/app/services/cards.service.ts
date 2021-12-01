import { Injectable } from "@angular/core";
import { cardMock } from "../mock/card.mock";
import { CardModel } from "../models/card.model";
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  private toCart: CardModel[]=[];
  private activeCart: CardModel[] = cardMock;

  getCards(): CardModel[]{
    return this.activeCart;
  }
  getCard(id: number): CardModel | null{
     const activeCard = this.activeCart.find((item: CardModel)=>{
      return item.id === id;
    });
    if(activeCard){
      return activeCard;
    }else{
        const archivedCard = this.toCart.find((item: CardModel)=>{
          return item.id === id;
      });
      return archivedCard ? archivedCard: null;
    }
  }

  moveToCart(buyCard: CardModel): void{
       this.toCart.push({...buyCard, buy: true});
      this.activeCart = this.activeCart.filter((item: CardModel)=>{
        return item.id !== buyCard.id;
      });
  }
  getCartData(): CardModel[]{
    return this.toCart;
  }
  getActiveCard(search:string = ''): CardModel[]{
    return this.activeCart.filter((item:CardModel)=>{
      return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      || item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
