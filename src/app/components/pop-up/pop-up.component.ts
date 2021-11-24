import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() close: EventEmitter<void>= new EventEmitter<void>();
  popupClose():void{
    this.close.emit();
  }

}
