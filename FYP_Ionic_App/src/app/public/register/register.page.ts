import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'; 
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public errorMessage: string;

  constructor(public afAuth: AngularFireAuth, public nav: NavController, private regService: UserService) { }

  ngOnInit() {
  }

  async register(form: NgForm){
    const user = new User(
      '',
      form.value.name,
      form.value.email,
      form.value.userType,
      form.value.bodyWeight,
      form.value.height,
    )
    await this.regService.register(user,form.value.password);
    this.errorMessage = this.regService.registerErrorMessage;
  }



}
