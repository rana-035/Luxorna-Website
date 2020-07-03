import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempleService {
  private readonly path="http://localhost:44386/Temple/"
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
getTempleById(id){
  return this.httpClient.get(`${this.path}GetTempleByID/${id}`,{headers:this.getHeader()})
}
getAllTemples()
{
  return this.httpClient.get(`${this.path}AllTemples`)
}
AddTemple(TempleEditView){

  return this.httpClient.post(`${this.path}AddTemple`,(TempleEditView))
}
UpdateTemple(TempleEditView){

  return this.httpClient.post(`${this.path}EditTemple`,(TempleEditView))
}
DeleteTemple(id){
  console.log("s",id);
  return this.httpClient.delete(`${this.path}RemoveTemple/${id}`)
}
upload(obj){
  console.log("service ",obj)
return this.httpClient.post(`http://localhost:44386/File/Upload`,obj, {headers:this.setHeadersOfUpload()})


}
}
