import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  title ="Наши товары";
  cards: CardModel[];
  constructor(private cardService: CardsService, private activatedRouter: ActivatedRoute){}
  ngOnInit(): void{
    this.cards = this.cardService.getCards();
    this.activatedRouter.queryParamMap.subscribe((params)=>{
    const search = params.get('search')||'';
    this.cards = this.cardService.getActiveCard(search);
  });
  
  }



}
