import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../Shared Classes and types/model/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // _url:string="assets/Data/Product.json";
  _url:string="https://jsonplaceholder.typicode.com/users";
//inject httpClient
  constructor(private Http : HttpClient) { }
  // 
  GetAllUser():Observable<IUser[]>
  {
  //  //htttp post , get 
   return this.Http.get<IUser[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server Error ");
   }));
  }
}
