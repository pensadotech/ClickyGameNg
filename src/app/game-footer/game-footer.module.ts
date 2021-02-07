import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFooterComponent } from './game-footer.component';


@NgModule({
  declarations: [
    GameFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameFooterComponent   // Export so app,.component can reference it  
  ]
})
export class GameFooterModule { }
