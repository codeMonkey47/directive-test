import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService{
    constructor(private http: Http) {};

    getNewsItems(){
        return this.http.get("../directive-test/news_data.json");
    }
}