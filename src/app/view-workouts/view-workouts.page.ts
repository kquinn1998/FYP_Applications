import { Component, OnInit } from '@angular/core';
import { Workout } from './workout.model';

@Component({
  selector: 'app-view-workouts',
  templateUrl: './view-workouts.page.html',
  styleUrls: ['./view-workouts.page.scss'],
})
export class ViewWorkoutsPage implements OnInit {

  workouts: Workout[] = [
    {
      id:"",
      title:"Back Workout",
      description:"Back Workout With A Big Description",
      exercises:[""],
      sets:[],
      reps:[],
    },
    {
      id:"",
      title:"Chest Workout",
      description:"Chest Workout With A Big Description",
      exercises:[""],
      sets:[],
      reps:[],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
