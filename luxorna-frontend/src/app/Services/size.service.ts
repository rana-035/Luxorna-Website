import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  private readonly path="http://localhost:44386/Size/"
  constructor(private httpClient:HttpClient) { }
  getSizes(){
    return this.httpClient.get(`${this.path}AllSizes`)
  }
}
