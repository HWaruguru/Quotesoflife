import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteListFormComponent } from './quote-list-form/quote-list-form.component'
import { QuoteListComponent } from './quotes/quote-list.component'
import { Quote } from './quotes/quote'

@Component({
  selector: 'lq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [QuoteListComponent]
})

export class AppComponent {
  pageTitle: string = 'LifeQuotes';

  constructor(private modalService: NgbModal) { }
  public quote = {}

  quotes: Quote[] = [new Quote(
    "When you have a dream, you've got to grab it and never let go.",
    "Carol Burnett",
    new Date('2019, 09, 12'),
    "Hannah"
  ),
  new Quote(
    "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    "Stephen King",
    new Date('2019, 09, 22'),
    "Giture"
  ),
  new Quote(
    "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and \
    studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
    "William Faulkner",
    new Date('2019, 08, 02'),
    "Waruguru"
  )
  ]
  openFormModal() {
    const modalRef = this.modalService.open(QuoteListFormComponent);
    modalRef.componentInstance.quote = this.quote;

    modalRef.result.then((result) => {
      this.quotes.push(new Quote(result.quote, result.author, new Date(), result.addedBy))
    }).catch((error) => {
      console.log(error);
    });
  }
}
