import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as firebase from 'firebase';

interface UserDataInt {
  name:string;
  email:string;
  userType:string;
  bodyWeight:number;
  height:number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSub: Subscription;

  private _userIsAuthenticated = false;
  private _userId = 'I5lbBWcOHDfnFByMTV1bEbi4Ccu2';
  private _currentUser;
  
  private isLoading = false;
  private isLogin = true;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  get currentUser() {
    return this._currentUser;
  }

  constructor(public nav: NavController,
              private afAuth: AngularFireAuth,
              private router: Router,
              private loadingCtrl: LoadingController,
              private http: HttpClient) {}

  async login(email: string, password: string) {
    this.isLoading = true;
    try {

      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      const user = this.afAuth.auth.currentUser;


      if(user.emailVerified){
        this._userId = user.uid;

        this.userSub = this.getUserRecord().subscribe(userReturned => {
          this._currentUser = userReturned;
        });


        this.loadingCtrl
          .create({ keyboardClose: true, message: 'Logging in...' })
          .then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
              this.isLoading = false;
              loadingEl.dismiss();
              this.router.navigateByUrl('/dashboard');
            }, 1500);
          });
        this._userIsAuthenticated = true;
      } else{
        throw(console.error());
      }
    } catch (err) {
      console.log(err);
      this.isLoading = true;
      this.loadingCtrl
        .create({ keyboardClose: true, message: 'Logging in...' })
        .then(loadingEl => {
          loadingEl.present();
          setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
          }, 1500);
        });
    }
  }

  async logout() {
    this._userIsAuthenticated = false;
    this._userId = null;
    this._currentUser = null;
    await this.afAuth.auth.signOut();
  }

  async register(userObj: User, password: string) {
    this.isLoading = true;
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(userObj.email,password);
      const user = this.afAuth.auth.currentUser;
      user.updateProfile({
        displayName: name,
      }).then(function() {

      }, function(error) {

      });

      this.createUserRecord(userObj, user.uid).subscribe();

      user.sendEmailVerification().then(function() {
        // Email sent.
      }).catch(function(error) {
        // An error happened.
      });

      this.logout();
      this.loadingCtrl
        .create({ keyboardClose: true, message: 'Registering...' })
        .then(loadingEl => {
          loadingEl.present();
          setTimeout(() => {
            this.isLoading = false;
            this.nav.navigateForward('/login');
            loadingEl.dismiss();
          }, 1500);
        });
    } catch(err) {
      console.dir(err);
    }
  }

  createUserRecord(user: User, uid: string){
    return this.http.put(`https://revolutefitness-a92df.firebaseio.com/users/${uid}.json` ,{
      ...user,
    })
  }

  getUserRecord(){
    return this.http
      .get<UserDataInt>(
        `https://revolutefitness-a92df.firebaseio.com/users/${this._userId}.json`
      )
      .pipe(
        map(userData => {
          return new User(
            userData.name,
            userData.email,
            userData.userType,
            userData.bodyWeight,
            userData.height,
          )
          }
        )
      );
  }
}

