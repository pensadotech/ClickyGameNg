import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'cgm-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  
  // properties .......................
  @Input() cardId: string = '';
  @Input() cardName: string = '';
  @Input() cardImage: string = '';
  
  // event to send back selection to caller component
  @Output() cardSelected: EventEmitter<string> = new EventEmitter<string>();
  
  // Constructor .......................
  constructor() { }
  
  // events ............................. 

  // React to a click event for the Card button
  //  (click)="onClick()"
  // In this case run an event that will return the selected id as string
  onClick(): void {
    //console.log('selcted-cardid',this.cardId)
    this.cardSelected.emit(`${this.cardId}`);
  }

  // Life Hocks events ..................
  ngOnInit(): void {
  }

}
