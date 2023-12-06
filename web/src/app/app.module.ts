import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SmoothScrollDirective } from './smooth-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
