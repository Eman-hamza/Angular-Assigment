import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ICategory } from '../Shared Classes and types/model/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _url:string="assets/Data/Category.json";
//inject httpClient
  constructor(private Http : HttpClient) { }
  // 
  GetAllCategory():Observable<ICategory[]>
  {
  //  //htttp post , get 
   return this.Http.get<ICategory[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server Error ");
   }));
  }
  
}