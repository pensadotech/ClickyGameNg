import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRowComponent } from './game-row.component';
import { GameCardModule } from '../game-card/game-card.module';


@NgModule({
  declarations: [GameRowComponent],
  imports: [
    CommonModule,
    GameCardModule
  ], 
  exports: [
    GameRowComponent
  ]
})
export class GameBodyModule { }
