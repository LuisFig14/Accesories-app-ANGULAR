import { Component, OnInit } from '@angular/core';
import { UserAccesories } from '../services/user/UserAccesories';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userAccesories:UserAccesories[] = [];

  constructor(private userService:UserService){

  }

  ngOnInit(): void {
      this.userService.getAll().subscribe( e => this.userAccesories = e)
  }




}
