import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';
import { Workout } from 'src/app/models/workout.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-workout-details',
  templateUrl: './view-workout-details.page.html',
  styleUrls: ['./view-workout-details.page.scss'],
})
export class ViewWorkoutDetailsPage implements OnInit, OnDestroy {

  workout: Workout;
  workoutSub: Subscription;
  isLoading = false;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private workoutServ: WorkoutService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('workoutId')){
        this.router.navigateByUrl('/view-workouts');
        return;
      }
      this.isLoading = true;
      this.workoutSub = this.workoutServ.getWorkout(paramMap.get('workoutId')).subscribe(workout => {
        this.workout = workout;
        this.isLoading = false;
      })
    })
  }

  ngOnDestroy() {
    if(this.workoutSub){
      this.workoutSub.unsubscribe();
    }
  }

}
