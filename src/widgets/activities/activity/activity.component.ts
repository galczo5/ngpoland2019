import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent {

  @Input()
  activity: Activity;

  @Input()
  active = false;

}
