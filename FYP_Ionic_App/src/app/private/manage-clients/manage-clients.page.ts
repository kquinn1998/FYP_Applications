import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.page.html',
  styleUrls: ['./manage-clients.page.scss'],
})
export class ManageClientsPage implements OnInit {

  private userSub: Subscription;
  private clientSub: Subscription;

  users: User[] = [ ];
  clients: User[] = [ ];
  isLoading = false;
  errorMessage: string;

  constructor(private userServ: UserService,
              public router: Router) { }

  ngOnInit() {
    this.errorMessage = '';
    this.isLoading = true;
    this.userSub = this.userServ.users.subscribe(users => {
      this.users = users;
    });
    this.clientSub = this.userServ.clientUsers.subscribe(clients => {
      this.clients = clients;
      this.isLoading = false;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.userServ.fetchUsers().subscribe(() => {
    });
    this.userServ.fetchClientUsers().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if(this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  async addClient(form: NgForm) {
    this.isLoading = true;
    this.errorMessage = 'No Client Found';
    for (const user of this.users) {
      if (user.email === form.value.email) {
        this.errorMessage = '';
        this.userServ.addClient(user).subscribe(() => {
          this.userServ.fetchClientUsers().subscribe(() => {
            this.isLoading = false;
          });
        });
        break;
      }
    }
  }
}
