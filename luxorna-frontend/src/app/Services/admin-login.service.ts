import { Injectable } from '@angular/core';
import {HttpClient, HttpParams}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  readonly path="http://localhost:44386/Admin/"

 
  constructor(private httpclient:HttpClient) { }
   
  getAdminById(id){
     return this.httpclient.get(`${this.path}GetAdminByID/${id}`)
   }
  getAdminToken(admin){

    console.log(admin)

    return this.httpclient.post(`${this.path}Login`,(admin));
  //  let data = {
     
  //     "username": username,
  //     "password":password
  //   };   
  //    let body = JSON.stringify(data )
  //   let head = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.httpclient.post(`${this.path}Login`,body,{head});
  }
}
