export class Quote {
    constructor (public quote: string, public author: string, public date: Date, public createdBy: string, public upvotes: number = 0, public downvotes: number = 0) {
        // this.quote = quote;
        // this.author = author;
        // this.date = date;
        // this.createdBy = createdBy;
        // this.upvotes = upvotes;
        // this.downvotes = downvotes;
    }
    upvote() {
        this.upvotes += 1
    }

    downvote() {
        this.downvotes += 1
    }
}
