import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: '';
  password: '';
  isLoading = false;
  isLogin = true;
  errorMessage;
  

  constructor(
    private authService: UserService,
    private router: Router,
    private loadingCtrl: LoadingController,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(form: NgForm) {
    await this.authService.login(form.value.email, form.value.password);
    this.errorMessage = this.authService.loginErrorMessage;
  }

}
