import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private isLoading = false;
  private isLogin = true;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(public nav: NavController,
              private afAuth: AngularFireAuth,
              private router: Router,
              private loadingCtrl: LoadingController) {}

  async login(email: string, password: string) {
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      const user = this.afAuth.auth.currentUser;
      if(user.emailVerified){
        console.log(res);
        this.isLoading = true;
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
    await this.afAuth.auth.signOut();
  }

  async register(email: string, password: string, name: string) {
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
      const user = this.afAuth.auth.currentUser;
      user.updateProfile({
        displayName: name,
      }).then(function() {

      }, function(error) {

      });
      user.sendEmailVerification().then(function() {
        // Email sent.
      }).catch(function(error) {
        // An error happened.
      });
      this.logout();
      this.isLoading = true;
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
      console.log(res);
    } catch(err) {
      console.dir(err);
    }
  }
}
