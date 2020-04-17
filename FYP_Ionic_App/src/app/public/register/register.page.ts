import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'; 
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public errorMessage: string;
  form: FormGroup;
  isLoading = false;

  constructor(public afAuth: AngularFireAuth,
              public nav: NavController,
              private regService: UserService,
              private fb: FormBuilder,) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      height: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      weight: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      userType: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      height: [''],
      weight: [''],
      userType: ['general_user'],
    });
  }

  async register() {
    const user = new User(
      '',
      this.form.value.name,
      this.form.value.email,
      this.form.value.userType,
      this.form.value.weight,
      this.form.value.height,
    );
    await this.regService.register(user, this.form.value.password);
    this.errorMessage = this.regService.registerErrorMessage;
  }



}
