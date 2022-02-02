import { CardModel } from "../models/card.model";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService{

  card: CardModel | undefined
  constructor(private httpClient: HttpClient){}

  public getProducts(): Observable<CardModel[]>{
    return this.httpClient.get<CardModel[]>('/api/products');
  }
  public getProductWithId(id: number):Observable<CardModel|null>{
    return this.getProducts()
        .pipe(
          map((products) => products.find((card:CardModel) =>  card.id===id)??null )
        )
 }

 public getActiveCard(search:string = ''): Observable<CardModel[]|null>{
  return this.getProducts()
    .pipe(
      map((products) => products.filter((item:CardModel)=>{
         return item.name.toLocaleLowerCase() == search.toLocaleLowerCase()
        || item.price.toLocaleLowerCase() == search.toLocaleLowerCase()
      })??null)
    )
}

}
