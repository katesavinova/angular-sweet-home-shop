import { Injectable } from "@angular/core";
import { cardMock } from "../mock/card.mock";
import { CardModel } from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  private toCart: CardModel[]=[];
  private products: CardModel[] = cardMock;

  getCards(): CardModel[]{
    return this.products;
  }
  getCard(id: number): CardModel | null{
     const product = this.products.find((item: CardModel)=>{
      return item.id === id;
    });
     return product? product: null;
  }
  getCartData(): CardModel[]{
    return this.toCart;
  }
  moveToCart(buyCard: CardModel): void{
    this.toCart.push({...buyCard, buy: true});
      this.products = this.products.filter((item: CardModel)=>{
        return item.id !== buyCard.id;
      });
  }

  getActiveCard(search:string = ''): CardModel[]{
    return this.products.filter((item:CardModel)=>{
      return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      || item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
