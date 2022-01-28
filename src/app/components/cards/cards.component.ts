import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  card: CardModel;
  title ="Наши товары";
  products$: Subject<CardModel[]> = new Subject();

  constructor(private cardService: CardsService,private cartService: CartService, private activatedRouter: ActivatedRoute){}
  ngOnInit(): void{
   this.cardService.getProducts()
      .subscribe( (products)=>{
       this.products$.next(products);
      });

   // this.cards = this.cardService.getCards();
    this.activatedRouter.queryParamMap.subscribe((params)=>{
    const search = params.get('search')||'';
   // this.cards = this.cardService.getActiveCard(search);
   });

  }
  addToCart(card:CardModel){
    this.cartService.moveToCart(card).subscribe(
      (byCart:any)=>{
       card=byCart;
      }
    )
  }
}
