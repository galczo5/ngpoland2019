import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent {

  @Input()
  news: News;

}
