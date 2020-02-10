import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-record-workout',
  templateUrl: './record-workout.page.html',
  styleUrls: ['./record-workout.page.scss'],
})
export class RecordWorkoutPage implements OnInit {

  form: FormGroup;

  constructor() { }

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
    console.log(this.form);
  }

}
