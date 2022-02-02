import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { CardsModule } from './cards.module';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  cards: CardModel[];
  card: CardModel[];
  title ="Наши товары";
  products$: Subject<CardModel[]|null> = new Subject();
  private loadProducts$: Subscription = new Subscription();
  private activeCard$: Subscription = new Subscription();

  constructor(private cardService: CardsService,private cartService: CartService, private activatedRouter: ActivatedRoute){}
  ngOnInit(): void{



   this.activeCard$ = this.activatedRouter.queryParamMap.subscribe((params)=>{
      const search = params.get('search')||'';
      if(search){
         this.cardService.getActiveCard(search).subscribe(
        (products:CardModel[]|null)=>{
          this.products$.next(products);
        })}
        else  this.loadProducts$ = this.cardService.getProducts()
        .subscribe( (products)=>{
         this.products$.next(products);
        });
   });

  }
  ngOnDestroy(): void {
    this.loadProducts$.unsubscribe();
    this.activeCard$.unsubscribe();
  }
  addToCart(card:CardModel){
    this.cartService.moveToCart(card).subscribe(
      (byCart:any)=>{
       card=byCart;
      }
    )
  }
}
