import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: '';
  password: '';

  constructor(public afAuth: AngularFireAuth, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this;
    try {
      const res = this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.auth.userLoggedIn();
      this.router.navigate(['/home']);
      // const res = this.afAuth.auth.signInWithCredential
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }

}
