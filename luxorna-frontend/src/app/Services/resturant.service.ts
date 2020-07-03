import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ResturantService  {

  
  private readonly path="http://localhost:44386/Resturant/"
  constructor(private httpClient:HttpClient) { }
  // intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
  //   throw new Error("Method not implemented.");
  // }
  getHeader(){ 
     

    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer '.concat(localStorage.getItem('token'))
    );
    //eturn this.httpClient.get(`${this.path}AllResturants`,{headers:header})
    return header;
  }
  
  getResturantById(id){
    return this.httpClient.get(`${this.path}GetResturantByID/${id}`)
  }
  getAllResturants()
  {
    return this.httpClient.get(`${this.path}AllResturants`)
  }
}
