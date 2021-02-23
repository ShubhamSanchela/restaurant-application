import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _url = "http://localhost:3000/resto";
  reg_url = "http://localhost:3000/";

  constructor(private _http : HttpClient) { }

  getlistresto(){
    return this._http.get(this._url);
  }

  addResto(data: any){
   return this._http.post(this._url,data)
  }

  getCurrentData(id: number){
    return this._http.get(`${this._url}/${id}`);
  }

  updateResto(id : number,data : any){
    return this._http.put(`${this._url}/${id}`,data);
  }

  deleteResto(id: any){
    return this._http.delete(`${this._url}/${id}`)
  }

  createUser(data : any){
    return this._http.post(this.reg_url + 'users',data)
  }

  getLatestUsers(){
    return this._http.get(this._url);
  }

}
