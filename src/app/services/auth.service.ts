import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

const TOKEN_KEY = 'user-access-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor() {
  }

  userLoggedIn() {
    this.loggedIn = true;
  }

  checkIfLoggedIn() {
    return this.loggedIn;
  }
}
