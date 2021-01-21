import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data: Login;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Login();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createUsuario(this.data).subscribe((response) => {
      this.router.navigate(['home']);
    });

  }

}
