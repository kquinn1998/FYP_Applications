import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'; 
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(public afAuth: AngularFireAuth, public nav: NavController) { }

  ngOnInit() {
  }

  async register(){
    const { email, password} = this;
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
      console.log(res);
      this.nav.navigateForward("/login");
    } catch(err) {
      console.dir(err);
    }
  }



}
