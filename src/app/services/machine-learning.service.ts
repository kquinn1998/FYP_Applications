import { Injectable, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
@Injectable({
  providedIn: 'root'
})
export class MachineLearningService implements OnInit {

  model: tf.Sequential;
  prediction: any;

  constructor() { 
    this.trainModel();
  }

  ngOnInit(){
    this.trainModel();
  }

  async trainModel(){
    
  }
}
