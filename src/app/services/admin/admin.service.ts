import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url ="http://localhost:8080/products";

  //constructor
  constructor( private http: HttpClient) { }







}
