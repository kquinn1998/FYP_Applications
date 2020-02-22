import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateWorkout } from './create-workout.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-record-workout',
  templateUrl: './create-workout.page.html',
  styleUrls: ['./create-workout.page.scss'],
})
export class CreateWorkoutPage implements OnInit {

  form: FormGroup;

  /*private httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json'
    }),
    responseType: 'text'
  };*/

  constructor(private http: HttpClient, private fb: FormBuilder) { }

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
      exercises: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
    this.form = this.fb.group({
      title: [''],
      description: [''],
      exercise: [''],
      exercises: this.fb.array([''])
    });

  }

  get exercises() {
    return this.form.get('exercises') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.fb.control(''));
  }

  createWorkout() {
    const newWorkout = new CreateWorkout(
      "123456789",
      this.form.value.title,
      this.form.value.description,
      this.form.value.exercises,
    );
    console.log(newWorkout);
    //return this.http.post('https://revolutefitness-a92df.firebaseio.com/workouts.JSON', {newWorkout});
    return this.http.post<{ 'kevin' }>('https://revolutefitness-a92df.firebaseio.com/workouts.json' , newWorkout)
        .subscribe(data => {
            console.log(data);
        });
  }
}
