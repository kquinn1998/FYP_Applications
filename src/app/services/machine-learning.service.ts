import { Injectable, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { mod } from '@tensorflow/tfjs';
import { join } from 'path';
@Injectable({
  providedIn: 'root'
})
export class MachineLearningService implements OnInit {

  model;
  prediction: any;

  constructor() {
    this.model = tf.loadLayersModel('../ml-models/final-model.json');
  }

  ngOnInit() {

  }

  async trainModel(){
    /*this.model = new tf.Sequential({
      layers: [
        tf.layers.conv2d({inputShape: [150, 150, 2], activation: 'relu', kernelSize: 64, filters: 64}),
        tf.layers.maxPooling2d({poolSize: [2, 2]}),

        tf.layers.conv2d({activation: 'relu', kernelSize: 64, filters: 64}),
        tf.layers.maxPooling2d({poolSize: [2, 2]}),

        tf.layers.flatten({}),
        tf.layers.dense({units: 64, activation: 'relu'}),

        tf.layers.dense({units: 1, activation: 'sigmoid'})
      ]
    });

    this.model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});*/
  }
}
