import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  private readonly path="http://localhost:44386/Hotel/"

  constructor(private httpClient:HttpClient) { }
  getHeader(){ 
    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer '.concat(localStorage.getItem('token'))
    );
    header= header.append('Content-Type', 'application/json');
    //return this.httpClient.get(`${this.path}AllResturants`,{headers:header})
    return header;
  }

  private setHeadersOfUpload(): HttpHeaders {
		let headersConfig = {
			'Accept': 'application/json',
		};
		return new HttpHeaders(headersConfig);
	}
  getHotelById(id){
    return this.httpClient.get(`${this.path}GetHotelByID/${id}`,{headers:this.getHeader()})
  }
  getAllHotels()
  {
    return this.httpClient.get(`${this.path}AllHotels`)
  }
  AddHotel(HotelEditView){

    return this.httpClient.post(`${this.path}AddHotel`,(HotelEditView))
  }
  UpdateHotel(HotelEditView){

    return this.httpClient.post(`${this.path}EditHotel`,(HotelEditView))
  }
  DeleteHotel(id){
    console.log("s",id);
    return this.httpClient.delete(`${this.path}RemoveHotel/${id}`)
  }
  upload(obj){
    console.log("service ",obj)
	return this.httpClient.post(`http://localhost:44386/File/Upload`,obj, {headers:this.setHeadersOfUpload()})
  }
}

