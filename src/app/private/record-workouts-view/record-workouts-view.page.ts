import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Workout } from 'src/app/models/workout.model';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-record-workouts-view',
  templateUrl: './record-workouts-view.page.html',
  styleUrls: ['./record-workouts-view.page.scss'],
})
export class RecordWorkoutsViewPage implements OnInit {

  private workoutSub: Subscription;
  form: FormGroup;
  isLoading = false;
  workouts: Workout[];

  constructor(private workoutServ: WorkoutService) { }

  ngOnInit() {
    this.isLoading=true;
    this.workoutSub = this.workoutServ.workouts.subscribe(workouts => {
      this.workouts = workouts;
      this.isLoading=false;
    });
  }

  ionViewWillEnter() {
    this.isLoading=true;
    this.workoutServ.fetchWorkouts().subscribe(() => {
      this.isLoading=false;
    });
  }

  ngOnDestroy(): void {
    if(this.workoutSub){
      this.workoutSub.unsubscribe();
    }
  }

}
