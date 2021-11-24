import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { cardMock } from 'src/app/mock/card.mock';
import { cartMock } from 'src/app/mock/cart.mock';
import { CartModel } from 'src/app/models/cart.model';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  Title ="Наши товары";
  Cart: CartModel[] = cartMock;
  Cards: CardModel[] = cardMock;
  addToCart(id: number){
    const card = this.Cards.find((item: CardModel)=>{
      this.Cart.push({
        id: this.Cart.length + 1,
        name: item.name,
        price: item.price,
      });

      return item.id === id;
    })
    if(card){
      //передать данные карточки в массив корзины
      console.log(card.id+" "+ card.name+" " +card.price);
    }

  }
}
