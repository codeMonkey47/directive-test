import { Component } from '@angular/core';
import { NewsService } from './news.service'

@Component({
    moduleId: module.id,
    selector: "news-list",
    styleUrls: ['newsList.component.css'],
    templateUrl: "newsList.component.html",
    providers: [NewsService]
})
export class NewsList {
    constructor(private newsService: NewsService) {
        newsService.getNewsItems().subscribe(response => {
            this.newsItems = response.json();
        },
        error => {
            alert("Sorry. There was a problem fetching the data");
        });
    }
    selectedNewsId: number;
    newsItems = [];
    expandNews(id : number) {
        this.selectedNewsId = id;
        return false;
    }
}