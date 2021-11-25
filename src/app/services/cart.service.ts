import { Injectable } from "@angular/core";
import { cartMock } from "../mock/cart.mock";
import { CartModel } from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService{
  getCart(): CartModel[]{
    return cartMock;
  }
}
