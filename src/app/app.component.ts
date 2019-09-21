import { Component } from '@angular/core';

@Component({
  selector: 'lq-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <ql-quotes></ql-quotes>
  </div>
  `
})
  
export class AppComponent {
  pageTitle: string = 'LifeQuotes';
}
