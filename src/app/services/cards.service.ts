import { cardMock } from "../mock/card.mock";
import { CardModel } from "../models/card.model";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  //private products: CardModel[] = cardMock;
  constructor(private httpClient: HttpClient){}

  public getProducts(): Observable<CardModel[]>{
    return this.httpClient.get<CardModel[]>('/home');
  }
  //public getProductsWithIds(ids: number[]): Observable<CardModel[]> {

    // return new Observable<CardModel[]>((s) => {
    //   this.getProducts()
    //     .pipe(
    //       map((card) => cards.filter((card:CardModel) => ids.includes(card.id)))
    //     )
    //     .subscribe((card) => {
    //       s.next(card);
    //       s.complete();
    //     });
    // });
 // }

  // getCards(): CardModel[]{
  //   return this.products;
  // }
  // getCard(id: number): CardModel | null{
  //    const product = this.products.find((item: CardModel)=>{
  //     return item.id === id;
  //   });
  //    return product? product: null;
  // }
  // getActiveCard(search:string = ''): CardModel[]{
  //   return this.products.filter((item:CardModel)=>{
  //     return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //     || item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  //   });
  // }
}
