import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

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
    NgxGoogleAnalyticsModule.forRoot('G-281NWKTHPQ'),
    NgxGoogleAnalyticsRouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
