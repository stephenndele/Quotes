import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("STN", "Stephen Ndele", "Life is sweet when you do not copy others."),
    new Quote("KIM", "Major", "Follow the light and you shall see life "),
    new Quote("R", "King", "Doing what you love is life")
  ]
    

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }

  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



constructor() { }

ngOnInit() {
}

}
