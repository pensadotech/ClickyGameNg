import { Component, OnInit } from '@angular/core';

// Interface
import { ICard } from './game-card/Card';

// Data source
import { GameServiceService } from './game-service/game-service.service';

@Component({
  selector: 'cgm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Properties .................................
  gameMsg: string = '';
  score: number = 0;
  topScore: number = 0;
  gameCards: ICard[] = [];
  selectedCards: ICard[] = [];
  errorMessage: string;

  // Constructors .....................................
  constructor(private gameServiceService: GameServiceService) { }
 
  // Events ..................................

  // Receive selcte card 
  onCardSelected(selectedCardid: string): void {
    //console.log('app-cardid',selectedCardid);
    // Process teh selected card 
    this.ProcessSelectedCard(selectedCardid);
 }

 // Methods .....................................

 // Shuffle an array (example arroy function)
 shufleArray = tgtArray => {
  let ctr = tgtArray.length
  let temp
  let index
  // Reorganize array
  while (ctr > 0) {
    // random index 
    index = Math.floor(Math.random() * ctr)
    ctr--
    temp = tgtArray[ctr]
    tgtArray[ctr] = tgtArray[index]
    tgtArray[index] = temp
  }
  return tgtArray
}

 // process selected card (example reular function notiation)
 ProcessSelectedCard (selectedCardid) : void {
   // verify entry to continue the game
   let origArray = this.gameCards;
   let itmsArr = this.selectedCards;  
   // evaluate the selected card was selected already
   if (itmsArr.indexOf(selectedCardid) !== -1) {
    // Duplicate entry, game over
    console.log('game over');
    itmsArr = [];
    this.score = 0;
    this.selectedCards = itmsArr;
    this.gameMsg = 'Game over, click to start again!';
   } else {
     // new selection continue the game
     itmsArr.push(selectedCardid)
     let tmpScore = this.score + 1
     let tmptopScore = this.topScore
     // Is a new top score?
     if (tmptopScore < tmpScore) {
      this.topScore = tmpScore;
     }
     // if all cards are selected, then is a win 
     // otehrwise encourage teh player
     if (origArray.length === itmsArr.length) {
      this.score = tmpScore;
      this.selectedCards = itmsArr;
      this.gameMsg = 'YOUR WIN!';
     } else {
      this.score = tmpScore;
      this.selectedCards = itmsArr;
      this.gameMsg = 'Good selection!';
     }
   }  
   // Reshulfe the cards 
   // console.log(this.selectedCards)
   this.gameCards = this.shufleArray( this.gameCards);
 }

 // Life Hocks events ..............................
 ngOnInit(): void {
    
  // Initialize properties 
  this.gameMsg = 'Click an image to begin!';

  // Get all cards and initalize array
  this.gameServiceService.getCards().subscribe({
    next: cards => {
      this.gameCards = cards;
      this.gameCards = this.shufleArray( this.gameCards);
      //console.log('data: ' + JSON.stringify(this.gameCards))
      //console.log("count:",this.gameCards.length);
    },
    error: err => this.errorMessage = err
  });

}

}
