import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent   // Export so app,.component can reference it  
  ]
})
export class NotificationModule { }
