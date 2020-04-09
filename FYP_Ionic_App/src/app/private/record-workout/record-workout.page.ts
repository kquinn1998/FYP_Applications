import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Workout } from '../../models/workout.model';
import { RecordedWorkout } from '../../models/recorded_workout.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';
import { WorkoutService } from 'src/app/services/workout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-record-workout',
  templateUrl: './record-workout.page.html',
  styleUrls: ['./record-workout.page.scss'],
})
export class RecordWorkoutPage implements OnInit {

  workout: Workout;
  recordedWorkout: RecordedWorkout;
  workoutSub: Subscription;
  isLoading = false;
  editMode = false;
  form: FormGroup;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private workoutServ: WorkoutService,
              private http: HttpClient,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('workoutId')){
        this.router.navigateByUrl('/view-workouts');
        return;
      }
      this.isLoading = true;
      this.workoutSub = this.workoutServ.getWorkout(paramMap.get('workoutId')).subscribe(workout => {
        this.workout = workout;
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
      notes: [''],
      exercise: [''],
      exercises: this.fb.array(this.workout.exercises),
      weight: [''],
      weights: this.fb.array(['']),
    });

    for (let i = 0; i < this.workout.exercises.length - 1; i++) {
      this.exercises.push(this.fb.control(''));
    }
  }


  get exercises() {
    return this.form.get('exercises') as FormArray;
  }

  get weights() {
    return this.form.get('weights') as FormArray;
  }

  recordWorkout() {
    const newRecordWorkout = new RecordedWorkout(
      '',
      this.workout.title,
      new Date(),
      this.form.value.notes,
      this.form.value.exercises,
      this.form.value.weights,
    );
    this.loadingCtrl
        .create({ keyboardClose: true, message: 'Recording Workout...' })
        .then(loadingEl => {
          loadingEl.present();
          this.workoutServ.recordWorkout(
            newRecordWorkout
          ).subscribe(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/view-recorded-workouts');
          });
        });
  }

  ngOnDestroy() {
    if(this.workoutSub){
      this.workoutSub.unsubscribe();
    }
  }
}
