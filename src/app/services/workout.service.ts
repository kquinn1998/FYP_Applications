import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Workout } from '../models/workout.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap, switchMap, take } from 'rxjs/operators';

interface WorkoutDataInt {
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
  
  getWorkout(id: string){
    return this.http
      .get<WorkoutDataInt>(
        `https://revolutefitness-a92df.firebaseio.com/workouts/${id}.json`
      )
      .pipe(
        map(workoutData => {
          return new Workout(
            id,
            workoutData.title,
            workoutData.description,
            workoutData.exercises,
            workoutData.sets,
            workoutData.reps
          )
          }
        )
      );
  }

  editWorkout(workout:Workout){
    
  }

  createWorkout(workout: Workout){
    let generatedId: string;
    return this.http.put<{name: string}>('https://revolutefitness-a92df.firebaseio.com/workouts.json' ,{
      ...workout,
      id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.workouts;
      }),
      take(1),
      tap(workouts => {
        workout.id = generatedId;
        this._workouts.next(workouts.concat(workout));
      })
    )
  }

  fetchWorkouts(){
    console.log('got here');
    return this.http
      .get<{ [key: string]: WorkoutDataInt }>(
        'https://revolutefitness-a92df.firebaseio.com/workouts.json'
      )
      .pipe(
        map(WorkoutDataInt => {
          const workouts = [];
          for (const key in WorkoutDataInt) {
            if (WorkoutDataInt.hasOwnProperty(key)) {
              workouts.push(
                new Workout(
                  key,
                  WorkoutDataInt[key].title,
                  WorkoutDataInt[key].description,
                  WorkoutDataInt[key].exercises,
                  WorkoutDataInt[key].sets,
                  WorkoutDataInt[key].reps
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
