import { Component, OnInit } from '@angular/core';
import {News} from '../news';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {

  news: News[] = [];

  fetchDate: Date = new Date();

  constructor(private readonly service: NewsService) {}

  ngOnInit(): void {
    this.service.getNews()
      .subscribe(news => {
        this.news = news;
        this.fetchDate = new Date();
      });
  }

}
