import { CardModel } from "../models/card.model";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardsModule } from "../components/cards/cards.module";

@Injectable({
  providedIn: 'root'
})
export class CardsService{
// products: CardModel[] = cardMock;
 card: CardModel | undefined
  constructor(private httpClient: HttpClient){}

  public getProducts(): Observable<CardModel[]>{
    return this.httpClient.get<CardModel[]>('/products');
  }
  public getProductsWithIds(ids: number[]): Observable<CardModel[]> {
    return new Observable<CardModel[]>((s) => {
      this.getProducts()
        .pipe(
          map((products) => products.filter((card:CardModel) => ids.includes(card.id)))
        )
        .subscribe((products) => {
          s.next(products);
          s.complete();
        });
    });
 }

  // getCards(): CardModel[]{
  //   return this.products;
  // }
  // getCard(id: number): CardModel | null{
  //    const product = this.products.find((item: CardModel)=>{
  //     return item.id === id;
  //   });
  //    return product? product: null;
  // }
  getActiveCard(search:string = ''): Observable<CardModel[]>{
    return new Observable<CardModel[]>((s) => {
      this.getProducts()
      .pipe(
        map((products)=> products.filter((card:CardModel) =>card.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              || card.price.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        )
      )
      .subscribe((products) => {
        s.next(products);
        s.complete();
      });
    });
  }

  // getActiveCard(search:string = ''): CardModel[]{
  //   return this.products.filter((item:CardModel)=>{
  //     return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //     || item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  //   });
  // }

}
