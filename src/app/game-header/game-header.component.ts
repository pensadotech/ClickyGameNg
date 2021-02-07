import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cgm-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})
export class GameHeaderComponent implements OnInit {
  
  // Properties .............................
  @Input() hdrMsg: string = '';
  @Input() hdrScore: number;
  @Input() hdrTopScore: number;
  
  // constructor .............................
  constructor() { }

  // Life Hocks events .........................
  ngOnInit(): void {
  }

}
