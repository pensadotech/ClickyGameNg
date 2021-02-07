import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameHeaderComponent } from './game-header.component';

@NgModule({
  declarations: [
    GameHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameHeaderComponent   // Export so app,.component can reference it  
  ]
})
export class GameHeaderModule { }
