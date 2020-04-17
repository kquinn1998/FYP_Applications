import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  isLoading = false;
  errorMessage;

  constructor(
    private authService: UserService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  async login() {
    await this.authService.login(this.form.value.email, this.form.value.password);
    this.errorMessage = this.authService.loginErrorMessage;
  }

}
