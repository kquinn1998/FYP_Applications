import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecordedWorkout } from '../../models/recorded_workout.model';
import { Subscription } from 'rxjs';
import { WorkoutService } from '../../services/workout.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-view-recorded-workouts',
  templateUrl: './view-recorded-workouts.page.html',
  styleUrls: ['./view-recorded-workouts.page.scss'],
})
export class ViewRecordedWorkoutsPage implements OnInit {

  private recordedWorkoutSub: Subscription;

  recordedWorkouts: RecordedWorkout[] = [ ];
  isLoading = false;
  ptMode = false;

  constructor(private workoutServ: WorkoutService,
              private userServ: UserService) { }

  ngOnInit() {
    this.isLoading=true;
    this.recordedWorkoutSub = this.workoutServ.recordedWorkouts.subscribe(recordedWorkouts => {
      this.recordedWorkouts = recordedWorkouts;
      this.isLoading=false;
    });
    this.ptMode = this.userServ.ptMode;
  }

  ionViewWillEnter() {
    this.isLoading=true;
    this.workoutServ.fetchRecordedWorkouts().subscribe(() => {
      this.isLoading=false;
    });
  }

  ngOnDestroy(): void {
    if(this.recordedWorkoutSub){
      this.recordedWorkoutSub.unsubscribe();
    }
  }

  deleteRecordedWorkout(id: string){
    this.workoutServ.deleteRecordedWorkout(id).subscribe();
  }

}
