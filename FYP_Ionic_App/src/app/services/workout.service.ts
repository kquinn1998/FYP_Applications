import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Workout } from '../models/workout.model';
import { RecordedWorkout } from '../models/recorded_workout.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap, switchMap, take } from 'rxjs/operators';
import { UserService } from './user.service';

interface WorkoutDataInt {
	title:string;
	description:string;
	id: string;
  exercises: string[];
  sets: number[];
  reps: number[];
}

interface RecordedWorkoutDataInt {
  id: string;
  title: string;
  date: Date;
  notes: string;
  exercises: string[];
  weights: number[];
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private _workouts = new BehaviorSubject<Workout[]>([]);
  private _recordedWorkouts = new BehaviorSubject<RecordedWorkout[]>([]);

	constructor(private http: HttpClient, private loginServ: UserService) {}
	
	get workouts() {
		return this._workouts.asObservable();
  }
  
  getWorkout(id: string){
    return this.http
      .get<WorkoutDataInt>(
        `https://revolutefitness-a92df.firebaseio.com/workouts/${this.loginServ.userId}/${id}.json`
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

  editWorkout(workout: Workout){
    let generatedId: string;
    return this.http.put<{name: string}>(`https://revolutefitness-a92df.firebaseio.com/workouts/${this.loginServ.userId}/${workout.id}.json` ,{
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

  createWorkout(workout: Workout){
    let generatedId: string;
    return this.http.post<{name: string}>(`https://revolutefitness-a92df.firebaseio.com/workouts/${this.loginServ.userId}.json` ,{
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
    return this.http
      .get<{ [key: string]: WorkoutDataInt }>(
        `https://revolutefitness-a92df.firebaseio.com/workouts/${this.loginServ.userId}.json`
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

  deleteWorkout(id: string) {
    return this.http
      .delete(
        `https://revolutefitness-a92df.firebaseio.com/workouts/${this.loginServ.userId}/${id}.json`
      )
      .pipe(
        switchMap(() => {
          return this.workouts;
        }),
        take(1),
        tap(workouts => {
          this._workouts.next(workouts.filter(b => b.id !== id));
        })
      );
  }

  //RECORDED WORKOUTS

  get recordedWorkouts() {
		return this._recordedWorkouts.asObservable();
  }

  recordWorkout(recordedWorkout: RecordedWorkout){
    let generatedId: string;
    return this.http.post<{name: string}>(`https://revolutefitness-a92df.firebaseio.com/recorded_workouts/${this.loginServ.userId}.json` ,{
      ...recordedWorkout,
      id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.recordedWorkouts;
      }),
      take(1),
      tap(recordedWorkouts => {
        recordedWorkout.id = generatedId;
        this._recordedWorkouts.next(recordedWorkouts.concat(recordedWorkout));
      })
    )
  }

  getRecordedWorkout(id: string){
    return this.http
      .get<RecordedWorkoutDataInt>(
        `https://revolutefitness-a92df.firebaseio.com/recorded_workouts/${this.loginServ.userId}/${id}.json`
      )
      .pipe(
        map(recordedWorkoutData => {
          return new RecordedWorkout(
            id,
            recordedWorkoutData.title,
            recordedWorkoutData.date,
            recordedWorkoutData.notes,
            recordedWorkoutData.exercises,
            recordedWorkoutData.weights
          );
        }
        )
      );
  }

  fetchRecordedWorkouts(){
    return this.http
      .get<{ [key: string]: RecordedWorkoutDataInt }>(
        `https://revolutefitness-a92df.firebaseio.com/recorded_workouts/${this.loginServ.userId}.json`
      )
      .pipe(
        map(recordedWorkoutData => {
          const recordedWorkouts = [];
          for (const key in recordedWorkoutData) {
            if (recordedWorkoutData.hasOwnProperty(key)) {
              recordedWorkouts.push(
                new RecordedWorkout(
                  key,
                  recordedWorkoutData[key].title,
                  recordedWorkoutData[key].date,
                  recordedWorkoutData[key].notes,
                  recordedWorkoutData[key].exercises,
                  recordedWorkoutData[key].weights
                )
              );

            }
          }
          return recordedWorkouts;
        }),
        tap(recordedWorkouts => {
          this._recordedWorkouts.next(recordedWorkouts);
        })
      );
  }

  deleteRecordedWorkout(id: string) {
    return this.http
      .delete(
        `https://revolutefitness-a92df.firebaseio.com/recorded_workouts/${this.loginServ.userId}/${id}.json`
      )
      .pipe(
        switchMap(() => {
          return this.recordedWorkouts;
        }),
        take(1),
        tap(recordedWorkouts => {
          this._recordedWorkouts.next(recordedWorkouts.filter(b => b.id !== id));
        })
      );
  }
}
