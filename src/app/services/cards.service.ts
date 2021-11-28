import { Injectable } from "@angular/core";
import { cardMock } from "../mock/card.mock";
import { CardModel } from "../models/card.model";
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  private ToCart: CardModel[]=[];
  private activeCart: CardModel[] = cardMock;
  constructor(private service: HttpClient){

  }
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
        const archivedCard = this.ToCart.find((item: CardModel)=>{
          return item.id === id;
      });
      return archivedCard ? archivedCard: null;
    }
  }

  moveToCart(buyCard: CardModel): void{
       this.ToCart.push({...buyCard, buy: true});
      this.activeCart = this.activeCart.filter((item: CardModel)=>{

      console.log(this.ToCart);
        return item.id !== buyCard.id;
      });
  }
  getCartData(): CardModel[]{
    return this.ToCart;
  }
  getActiveCard(serch:string = ''): CardModel[]{
    return this.activeCart.filter((item:CardModel)=>{
      return item.name.toLocaleLowerCase().includes(serch.toLocaleLowerCase())
      || item.price.toLocaleLowerCase().includes(serch.toLocaleLowerCase());
    });
  }
}
