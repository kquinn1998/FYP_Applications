import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private authService: UserService,
    private fb: FormBuilder,
    private router: Router) { }

  form: FormGroup;
  isLoading = false;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
    this.form = this.fb.group({
      email: ['']
    });
  }

  async changePassword() {
    await this.authService.changePasswordRequest(this.form.value.email);
    this.router.navigateByUrl('/login');
  }
}
