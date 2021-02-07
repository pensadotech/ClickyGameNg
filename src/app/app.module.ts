import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Important for services
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { GameHeaderModule } from './game-header/game-header.module';
import { GameFooterModule } from './game-footer/game-footer.module';
import { NotificationModule } from './notification/notification.module';
import { GameBodyModule } from './game-body/game-body.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameHeaderModule,
    GameFooterModule,
    NotificationModule,
    GameBodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
