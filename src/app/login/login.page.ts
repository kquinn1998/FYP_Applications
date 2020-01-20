import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const { email, password } = this;
    try {
      const res = this.afAuth.auth.signInWithEmailAndPassword(email, password);
      //const res = this.afAuth.auth.signInWithCredential
    } catch(err){
      console.dir(err);
      if(err.code === "auth/user-not-found"){
        console.log("User not found");
      }
    }
  }

}
