import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/login.service';
import { User } from 'src/app/models/user.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  isLoading = false;
  isLogin = true;
  userType: string;

  constructor(private authService: AuthService,
              private router: Router,
              private loadingCtrl: LoadingController,
              private loginServ: AuthService,
              private iab: InAppBrowser) { }

  ngOnInit() {
    this.userType = this.loginServ.currentUser.userType;
  }

  openSite() {
    console.log("gots here");
    this.iab.create('http://kquinn1998.pythonanywhere.com/','_system');
  }

  logout() {
    this.isLoading = true;
    this.authService.logout();
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging out...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/login');
        }, 1500);
      });
  }

}
