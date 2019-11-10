import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../activities.service';
import {Activity} from '../activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html'
})
export class ActivitiesListComponent implements OnInit {

  activities: Activity[] = [];
  closedActivities: Activity[] = [];
  fetchDate: Date = new Date();

  constructor(private readonly activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.activitiesService.get()
      .subscribe(activities => {
        this.fetchDate = new Date();
        this.activities = activities;
        this.activities.sort((a, b) => b.date.getTime() - a.date.getTime());

        this.closedActivities = this.activities.slice(0, 2);
      });
  }

}
