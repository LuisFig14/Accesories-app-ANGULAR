import { Component } from '@angular/core';
import { AdminAccesories } from '../services/admin/AdminAccesories';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  adminAccesories: AdminAccesories [] = []; //Objeto adminAccesories vacio

  constructor( private adminService:AdminService ){

  }

  ngOnInit():void{
    this.adminService.GetAll().subscribe(
      e => this.adminAccesories = e 
    )
  }


}
