import { Component, OnInit } from '@angular/core';
import { AdminAccesories } from '../services/admin/AdminAccesories';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  adminAccesories: AdminAccesories [] = []; //Objeto adminAccesories vacio

  constructor( private adminService:AdminService ){

  }

  ngOnInit():void{
    this.adminService.GetAll().subscribe(
      e => this.adminAccesories = e 
    )
  }

  delete(adminAccesories:AdminAccesories):void{
    this.adminService.delete(adminAccesories.id).subscribe(
      res=>this.adminService.GetAll().subscribe(
        response=>this.adminAccesories=response
      )
    )
  }


}
