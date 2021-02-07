import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

// Interface
import { ICard } from '../game-card/Card';

@Component({
  selector: 'cgm-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css']
})
export class GameRowComponent implements OnInit {
  
  // Properties ..........................
  @Input() startPos: number = 0;
  @Input() rowCards: ICard[] = [];

  // event to send back selection to caller component
  @Output() cardSelected: EventEmitter<string> = new EventEmitter<string>();

  // Constructors ........................
  constructor() { }

  // Life Hocks events ..................
  ngOnInit(): void {
  }
  
  // events ..............................

  // Recevie the click event from the card
  // in this case create en event in HTML to 
  // recevie the card component event
  //   (cardClicked)='oncardClicked($event)'
  // Resent teh selcted card as event also, 
  onCardSelected(selectedCardid: string): void {
     //console.log('row-cardid',selectedCardid)
     this.cardSelected.emit(selectedCardid);
  }
}
