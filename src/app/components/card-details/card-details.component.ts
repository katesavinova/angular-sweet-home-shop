import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

 card:CardModel|null;
  constructor(private activatedRoute: ActivatedRoute,private cardService: CardsService) {}

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
     const param = params["id"]

      this.cardService.getProductWithId(+param)
        .subscribe((data) => {
          this.card = data;
        })

    })
  }
}
