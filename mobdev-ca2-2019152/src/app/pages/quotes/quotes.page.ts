// Final Reference from : https://mikhail-cct.github.io/mobdev/wk4/#/38 

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    author: string = '';

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => { console.log('my data', data); });
    }
    openDetails(quote) {
        let quoteID = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteID}`);
    }

    search() {
        this.quotes = this.api.getQuoteSearch(this.author);
    }
}