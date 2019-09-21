import { Component } from '@angular/core';

@Component({
    selector: 'ql-quotes',
    templateUrl: './quote-list.component.html',
    styleUrls: ['./quote-list.component.css']
})

export class QuoteListComponent {
    quotes: object = {quote: 'When you have a dream, you\'ve got to grab it and never let go',
                      author: 'Carol Burnett',
                      date: new Date('2019, 09, 12'),
                      createdBy:'Hannah',
                      upvotes: 0,
                      downvotes: 0

                      }

}