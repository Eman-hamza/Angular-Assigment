import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { User } from '../Shared Classes and types/model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url:string="http://localhost:3500";
  _urlt:string="http://localhost:3500";

  constructor(private _httpClient:HttpClient) { }


  Register( formDta:User):Observable<any>
  {
   return this._httpClient.post(this._url,formDta)
  }
  Login( formDta:object):Observable<any>
  {
   return this._httpClient.post(this._urlt,formDta)
  }
}
