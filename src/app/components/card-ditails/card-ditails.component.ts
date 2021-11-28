import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-ditails',
  templateUrl: './card-ditails.component.html',
  styleUrls: ['./card-ditails.component.css']
})
export class CardDitailsComponent implements OnInit {
  card:CardModel|null;
  constructor(private activatedRoute: ActivatedRoute,
    private cardService: CardsService) {}

  ngOnInit(): void {
   const id = this.activatedRoute.snapshot.params['id'];
    if(id){
       this.card= this.cardService.getCard(+id);
    }
  }

}
