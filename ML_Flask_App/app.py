from flask import Flask, render_template, url_for, flash, redirect, request

# TensorFlow and tf.keras
import pandas as pd
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Activation, Flatten, Conv2D, MaxPooling2D
import pickle

# Helper libraries
import numpy as np
import matplotlib.pyplot as plt
import cv2
import os


app = Flask(__name__)
app.debug = True

@app.route("/", methods=['POST','GET'])
@app.route("/home", methods=['POST','GET'])
def home(name=None):
    if request.args:
        result = request.args['result']
    else:
        result = None
    return render_template('home.html', predictions=result)


app.config['IMAGE_UPLOADS'] = "C:/Users/kevin/Documents/Ionic/Revolute_Fitness/ML_Flask_App/static/img"


@app.route("/predict/", methods=['POST','GET'])
def runPrediction():
    if request.method == 'POST':
        
        if request.files:

            image = request.files['image']

            image.save(os.path.join(app.config['IMAGE_UPLOADS'], 'predict.jpg'))

            result = predict(os.path.join(app.config['IMAGE_UPLOADS'], 'predict.jpg'))

            os.remove(os.path.join(app.config['IMAGE_UPLOADS'], 'predict.jpg')) 

            return redirect(url_for('.home', result=result))

    return redirect('/home')




#ML STUFF
def prepare(filepath):
    IMG_SIZE = 150
    img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
    new_array = cv2.resize(img_array, (IMG_SIZE,IMG_SIZE))
    new_array = new_array.astype(np.float64)
    return new_array.reshape(-1,IMG_SIZE,IMG_SIZE,1)




def predict(filepath):
    model = tf.keras.models.load_model('my_model.h5')
    prediction = model.predict([prepare(filepath)])
    CATEGORIES = ["Barbell Squat", "Barbell Bench Press"]
    result = CATEGORIES[int(prediction[0][0])]
    print(result)
    return result




if __name__ == '__main__':
    app.run(debug=True)