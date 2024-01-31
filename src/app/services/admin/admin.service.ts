import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminAccesories } from './AdminAccesories';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url ="http://localhost:8080/products"; //URL API

  //constructor
  constructor( private http: HttpClient) { }

  //methods

  get(id:any):Observable<AdminAccesories>{
    return this.http.get<AdminAccesories>(this.url + '/' + id);
  }

  GetAll():Observable<AdminAccesories[]> {
    return this.http.get<AdminAccesories[]> (this.url);
  }

  create(admin:AdminAccesories):Observable<AdminAccesories> {
    return this.http.post<AdminAccesories>(this.url, admin);
  }
  
}
