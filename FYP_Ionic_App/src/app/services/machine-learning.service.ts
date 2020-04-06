import { Injectable, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { mod } from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
@Injectable({
  providedIn: 'root'
})
export class MachineLearningService implements OnInit {

  model;
  prediction: any;

  constructor() {
    this.model = tf.loadLayersModel('');
  }

  ngOnInit() {

  }

  async trainModel(){
    /*
    this.model = new tf.Sequential({
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

    this.model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});

    const images = [];
  const labels = [];
  
  var files = fs.readdirSync(dataDir);
  for (let i = 0; i < files.length; i++) { 
    if (!files[i].toLocaleLowerCase().endsWith(".png")) {
      continue;
    }

    var filePath = path.join(dataDir, files[i]);
    
    var buffer = fs.readFileSync(filePath);
    var imageTensor = tf.node.decodeImage(buffer)
      .resizeNearestNeighbor([96,96])
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();
    images.push(imageTensor);

    var hasTuberculosis = files[i].toLocaleLowerCase().endsWith("_1.png");
    labels.push(hasTuberculosis ? 1 : 0);
  }

  return [images, labels];
  */
  }
}
