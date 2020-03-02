import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'; 
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/login.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, public nav: NavController, private regService: AuthService) { }

  ngOnInit() {
  }

  async register(form: NgForm){
    this.regService.register(form.value.email, form.value.password, form.value.name);
  }



}
