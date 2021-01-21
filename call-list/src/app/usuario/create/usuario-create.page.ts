import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.page.html',
  styleUrls: ['./usuario-create.page.scss'],
})
export class UsuarioCreatePage implements OnInit {

  data: Usuario;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Usuario();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createUsuario(this.data).subscribe((response) => {
      this.router.navigate(['usuario-list']);
    });

  }

}
