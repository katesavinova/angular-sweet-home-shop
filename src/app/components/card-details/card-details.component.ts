import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import { Observable } from 'rxjs';
import { map, takeUntil} from 'rxjs/operators';
import { ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

 card:CardModel|null;

 product$: Observable<CardModel[]> = new Observable();
 destroy$: Subject<boolean> = new Subject();
 products$: ReplaySubject<CardModel[]> = new ReplaySubject<CardModel[]>(3);
  constructor(private activatedRoute: ActivatedRoute,private cardsService: CardsService) {}

  ngOnInit(): void {
   const id = this.activatedRoute.snapshot.params['id'];
    if(id){
    //   this.product$ = this.cardsService.getProductsWithIds(id)
    //    //this.card= this.cardService.getCard(+id);
    // }
      this.cardsService.getProductsWithIds(id)
        .pipe(
          takeUntil(this.destroy$),
            map((products) => products.map((product: CardModel) => {
                  product.name = `${product.name}`;
                  product.price = `$ ${product.price}`;
                  return product;
            }))
        )
          .subscribe((products) => {
                this.products$.next(products);
          });
  }
}
}
