import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Workout } from '../models/workout.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface WorkoutData {
	title:string;
	description:string;
	id: string;
  exercises: string[];
  sets: number[];
  reps: number[];
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

	private _workouts = new BehaviorSubject<Workout[]>([]);

	constructor(private http: HttpClient) {}
	
	get workouts() {
		return this._workouts.asObservable();
	}

  createWorkout(workout: Workout){
    return this.http.post<{ }>('https://revolutefitness-a92df.firebaseio.com/workouts.json' , workout)
        .subscribe(data => {
            console.log(data);
        });
  }

  fetchWorkouts(){
		console.log("got here");
    return this.http
      .get<{ [key: string]: WorkoutData }>(
        'https://revolutefitness-a92df.firebaseio.com/workouts.json'
      )
      .pipe(
        map(workoutData => {
          const workouts = [];
          for (const key in workoutData) {
            if (workoutData.hasOwnProperty(key)) {
              workouts.push(
                new Workout(
                  workoutData[key].id,
                  workoutData[key].title,
                  workoutData[key].description,
                  workoutData[key].exercises,
                  workoutData[key].sets,
                  workoutData[key].reps
                )
              );

            }
          }
          return workouts;
        }),
        tap(workouts => {
          this._workouts.next(workouts);
        })
      );
  }
}
