import { Component, OnInit } from '@angular/core';
import { AdminAccesories } from '../services/admin/AdminAccesories';
import { AdminService } from '../services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit{

  admin:AdminAccesories = new AdminAccesories(); //Instancia de la clase AdminAccesories 

  constructor(private adminService:AdminService, private router:Router, private activatedRouter:ActivatedRoute){ //Se le pasa el servicio y la ruta| Activaded route se utiliza para acceder a la información de la ruta activa
  }

  ngOnInit():void{
    this.muestraEditar();
  }

  //Muestra info para edicion
  muestraEditar():void{

    this.activatedRouter.params.subscribe(
      e=>{
        let id=e['id'];

        if(id){
          this.adminService.get(id).subscribe(
            es=>this.admin=es
          );
        }
      }
    )
  }


  create():void{
    this.adminService.create(this.admin).subscribe(
      res=>this.router.navigate(['Admin'])
    );
  }

  update():void{
    this.adminService.update(this.admin).subscribe(
      e=>this.router.navigate(['Admin'])
    );
  }

  




}
