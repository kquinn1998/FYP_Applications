import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { RecordWorkout } from './record-workout.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-record-workout',
  templateUrl: './record-workout.page.html',
  styleUrls: ['./record-workout.page.scss'],
})
export class RecordWorkoutPage implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      exerciseOne: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      exerciseTwo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  recordWorkout() {
    const newWorkout = new RecordWorkout(
      "12345667889",
      this.form.value.title,
      this.form.value.description,
      this.form.value.exerciseOne,
      this.form.value.exerciseTwo,
    );
    console.log("started");
    return this.http.post('https://revolutefitness-a92df.firebaseio.com/workouts.json', {...newWorkout});
  }
}
