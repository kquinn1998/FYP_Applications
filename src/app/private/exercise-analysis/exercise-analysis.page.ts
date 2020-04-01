import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { mod } from '@tensorflow/tfjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise-analysis',
  templateUrl: './exercise-analysis.page.html',
  styleUrls: ['./exercise-analysis.page.scss'],
})
export class ExerciseAnalysisPage implements OnInit {

  model;

  constructor() { }

  ngOnInit() {
    this.loadModel();
  }

  predict(imageForm: NgForm) {
    console.log(imageForm.value.imageFilePath);
  }

  async loadModel() {
    this.model = await tf.loadLayersModel('/assets/model.json');
  }

}
