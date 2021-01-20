import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
})
export class UsuarioListPage implements OnInit {

  usuariosData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.usuariosData = [];
  }

  ngOnInit() {
    // this.getAllStudents();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.apiService.getUsuarios().subscribe(response => {
      console.log(response);
      this.usuariosData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(() => {
      //Update list after delete is successful
      this.getAllUsuarios();
    });
  }

}
