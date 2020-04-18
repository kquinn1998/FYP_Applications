import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map, tap, take } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as firebase from 'firebase';

interface UserDataInt {
  name: string;
  email: string;
  userType: string;
  bodyWeigth: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Login Stuff
  private userSub: Subscription;
  private user: firebase.User;
  private _userIsAuthenticated = false;
  private _userId: string;
  private _currentUser: User;
  public ptMode = false;
  public _currentClient;
  private isLoading = false;
  private isLogin = true;
  public loginErrorMessage: string;
  public registerErrorMessage: string;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    if (this.ptMode) {
      return this._currentClient;
    } else {
      return this._userId;
    }
  }

  get currentUser() {
    return this._currentUser;
  }

  get currentUserName() {
    return this._currentUser.name;
  }

  // PT STUFF
  private _users = new BehaviorSubject<User[]>([]);
  private _clientUsers = new BehaviorSubject<User[]>([]);

  get users() {
    return this._users.asObservable();
  }

  get clientUsers() {
    return this._clientUsers.asObservable();
  }

  constructor(public nav: NavController,
              private afAuth: AngularFireAuth,
              private router: Router,
              private loadingCtrl: LoadingController,
              private http: HttpClient) {
                afAuth.authState.subscribe(user => {
                  this.user = user;
                });
              }

  async login(email: string, password: string) {
    this.isLoading = true;
    try {

      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);

      if (this.user.emailVerified){
        this._userId = this.user.uid;

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
      } else {
        this.loginErrorMessage = 'Users email needs to be verified, check your inbox !';
      }
    } catch (err) {
      this.loginErrorMessage = err.message;
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
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(userObj.email, password);
      const user = this.afAuth.auth.currentUser;
      user.updateProfile({
        displayName: name,
      }).then(function() {

      }, function(error) {

      });

      this.createUserRecord(userObj, user.uid).subscribe();

      user.sendEmailVerification().then( resp => {
        // Email sent.
      }).catch(error => {
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
    } catch (err) {
      this.registerErrorMessage = err.message;
    }
  }

  createUserRecord(user: User, uid: string) {
    return this.http.put(`https://revolutefitness-a92df.firebaseio.com/users/${uid}.json` , {
      ...user,
      id: null
    });
  }

  getUserRecord() {
    return this.http
      .get<UserDataInt>(
        `https://revolutefitness-a92df.firebaseio.com/users/${this._userId}.json`
      )
      .pipe(
        map(userData => {
          return new User(
            this.userId,
            userData.name,
            userData.email,
            userData.userType,
            userData.bodyWeigth,
            userData.height,
          )
          }
        )
      );
  }

  async changePasswordRequest(email: string) {
    await this.afAuth.auth.sendPasswordResetEmail(email);
  }

  // PT Client Stuff
  fetchUsers() {
    return this.http
      .get<{ [key: string]: UserDataInt }>(
        `https://revolutefitness-a92df.firebaseio.com/users.json`
      )
      .pipe(
        map(UserDataInt => {
          const users = [];
          for (const key in UserDataInt) {
            if (UserDataInt.hasOwnProperty(key) && UserDataInt[key].userType === 'client') {
              users.push(
                new User(
                  key,
                  UserDataInt[key].name,
                  UserDataInt[key].email,
                  UserDataInt[key].userType,
                  UserDataInt[key].bodyWeigth,
                  UserDataInt[key].height
                )
              );

            }
          }
          return users;
        }),
        tap(users => {
          this._users.next(users);
        })
      );
  }

  fetchClientUsers() {
    return this.http
      .get<{ [key: string]: UserDataInt }>(
        `https://revolutefitness-a92df.firebaseio.com/personal_trainers/${this.currentUser.id}/clients.json`
      )
      .pipe(
        map(UserDataInt => {
          const users = [];
          for (const key in UserDataInt) {
            if (UserDataInt.hasOwnProperty(key)) {
              users.push(
                new User(
                  key,
                  UserDataInt[key].name,
                  UserDataInt[key].email,
                  UserDataInt[key].userType,
                  UserDataInt[key].bodyWeigth,
                  UserDataInt[key].height
                )
              );

            }
          }
          return users;
        }),
        tap(users => {
          this._clientUsers.next(users);
        })
      );
  }

  addClient(user: User) {
    return this.http.put(`https://revolutefitness-a92df.firebaseio.com/personal_trainers/${this.userId}/clients/${user.id}.json` , {
      ...user,
    });
  }

  deleteClient(id: string) {
    return this.http
      .delete(
        `https://revolutefitness-a92df.firebaseio.com/personal_trainers/${this.userId}/clients/${id}.json`
      );
  }
}

