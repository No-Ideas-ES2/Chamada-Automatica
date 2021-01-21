import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.page.html',
  styleUrls: ['./usuario-edit.page.scss'],
})
export class UsuarioUpdatePage implements OnInit {

  data: Usuario;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Usuario();
  }

  ngOnInit() {
  }

  update() {
    this.apiService.updateUsuario(this.data).subscribe((response) => {
      this.router.navigate(['usuario-list']);
    });

  }

}
