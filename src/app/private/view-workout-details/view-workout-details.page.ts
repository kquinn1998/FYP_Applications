import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';
import { Workout } from 'src/app/models/workout.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-view-workout-details',
  templateUrl: './view-workout-details.page.html',
  styleUrls: ['./view-workout-details.page.scss'],
})
export class ViewWorkoutDetailsPage implements OnInit, OnDestroy {

  workout: Workout;
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
      }),
      sets: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      reps: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });

    this.form = this.fb.group({
      title: this.workout.title,
      description: this.workout.description,
      exercise: [''],
      exercises: this.fb.array(this.workout.exercises),
      set: [''],
      sets: this.fb.array(this.workout.sets),
      rep: [''],
      reps: this.fb.array(this.workout.reps)
    });
  }

  toggleEdit() {
    if(this.editMode){
      this.editMode=false;
    } else {
      this.editMode=true;
    }
  }


  get exercises() {
    return this.form.get('exercises') as FormArray;
  }

  get sets() {
    return this.form.get('sets') as FormArray;
  }

  get reps() {
    return this.form.get('reps') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.fb.control(''));
    this.sets.push(this.fb.control(''));
    this.reps.push(this.fb.control(''));
  }

  editWorkout() {
    /*const newWorkout = new Workout(
      this.workout.id,
      this.form.value.title,
      this.form.value.description,
      this.form.value.exercises,
      this.form.value.sets,
      this.form.value.reps,
    );
    console.log(newWorkout);
    this.loadingCtrl
        .create({ keyboardClose: true, message: 'Creating Workout...' })
        .then(loadingEl => {
          loadingEl.present();
          this.workoutServ.editWorkout(
            newWorkout
          ).subscribe(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/view-workouts');
          });
        });
    // this.router.navigateByUrl('');*/
  }

  ngOnDestroy() {
    if(this.workoutSub){
      this.workoutSub.unsubscribe();
    }
  }

}
