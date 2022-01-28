import { CardModel } from "../models/card.model";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cardMock } from "../mock/card.mock";

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  
  card: CardModel | undefined
  private products: CardModel[] = cardMock;
  constructor(private httpClient: HttpClient){}

  public getProducts(): Observable<CardModel[]>{
    return this.httpClient.get<CardModel[]>('/api/products');
  }
  public getProductWithId(id: number): Observable<CardModel> {
    return new Observable<CardModel>((s) => {
      this.getProducts()
        .pipe(
          map((products) => products.filter((card:CardModel) => id===card.id))
        )
    });
 }

//  getCard(id: number): CardModel | null{
//   const product = this.products.find((item: CardModel)=>{
//    return item.id === id;
//  });
//   return product? product: null;
// }

getActiveCard(search:string = ''): CardModel[]{
 return this.products.filter((item:CardModel)=>{
   return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
   || item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase());
 });
}

}
