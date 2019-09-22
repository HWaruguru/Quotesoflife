import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteListComponent } from './quotes/quote-list.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { QuoteListFormComponent } from './quote-list-form/quote-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    TimeAgoPipe,
    QuoteListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }