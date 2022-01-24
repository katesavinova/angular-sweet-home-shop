import { Injectable } from "@angular/core";
import { CardModel } from "../models/card.model";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CartService{
  //private toCart: CardModel[]=[];
  constructor(private http: HttpClient){ }

  moveToCart(buyCard: CardModel){
    //post запрос?
    //this.toCart.push({...buyCard, buy: true});
    return this.http.post('/api/cart', buyCard);
  }
    //get запрос?
  public getCartData(): Observable<CardModel[]>{
    return this.http.get<CardModel[]>('/api/cart');
  }
  // getCartData(): CardModel[]{
  //   return this.toCart;
  // }
}

