import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccesories } from './UserAccesories';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string="http://localhost:8080/products";

  constructor(private http:HttpClient ) { }

  //Methods

  get(id:any) :Observable<UserAccesories>{
    return this.http.get<UserAccesories> (this.url + '/' + id);
  }

  getAll():Observable<UserAccesories[]>{
    return this.http.get<UserAccesories[]> (this.url);

  }


}
