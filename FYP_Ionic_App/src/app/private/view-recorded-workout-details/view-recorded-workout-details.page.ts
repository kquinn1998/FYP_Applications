import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecordedWorkout } from 'src/app/models/recorded_workout.model';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-recorded-workout-details',
  templateUrl: './view-recorded-workout-details.page.html',
  styleUrls: ['./view-recorded-workout-details.page.scss'],
})
export class ViewRecordedWorkoutDetailsPage implements OnInit {

  recordedWorkout: RecordedWorkout;
  recordedWorkoutSub: Subscription;
  isLoading = false;
  form: FormGroup;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private workoutServ: WorkoutService,
              private http: HttpClient,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recordedWorkoutId')){
        this.router.navigateByUrl('/view-recorded-workouts');
        return;
      }
      this.isLoading = true;
      this.recordedWorkoutSub = this.workoutServ.getRecordedWorkout(paramMap.get('recordedWorkoutId')).subscribe(recordedWorkout => {
        this.recordedWorkout = recordedWorkout;
        this.setForm();
        this.isLoading = false;
      });
    });
  }

  setForm() {
    this.form = new FormGroup({
      notes: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      exercises: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      weights: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });

    this.form = this.fb.group({
      notes: [this.recordedWorkout.notes],
      exercise: [''],
      exercises: this.fb.array(this.recordedWorkout.exercises),
      weight: [''],
      weights: this.fb.array(this.recordedWorkout.weights),
    });

    for (let i = 0; i < this.recordedWorkout.exercises.length - 1; i++) {
      this.exercises.push(this.fb.control(''));
    }
  }


  get exercises() {
    return this.form.get('exercises') as FormArray;
  }

  get weights() {
    return this.form.get('weights') as FormArray;
  }

  ngOnDestroy() {
    if(this.recordedWorkoutSub){
      this.recordedWorkoutSub.unsubscribe();
    }
  }

}
