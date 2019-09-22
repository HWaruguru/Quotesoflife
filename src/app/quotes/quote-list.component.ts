import { Component, Input } from '@angular/core';
import { Quote } from './quote'

@Component({
    selector: 'ql-quotes',
    templateUrl: './quote-list.component.html',
    styleUrls: ['./quote-list.component.css']
})

export class QuoteListComponent {
    @Input() quotes: Quote[];

    updateQuoteWithHighestVotes() {
        const quoteVotes = this.quotes.map((quote) => quote.upvotes)
        const idx = quoteVotes.indexOf(Math.max(...quoteVotes))
        this.quotes = this.quotes.map((quote) => { return { ...quote, popular: false } })
        this.quotes[idx].popular = true
    }

    upvote(idx: number) {
        this.quotes[idx].upvotes += 1
        this.updateQuoteWithHighestVotes()
    }

    downvote(idx: number) {
        this.quotes[idx].downvotes += 1
    }
}