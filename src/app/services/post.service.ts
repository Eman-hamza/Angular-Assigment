import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../Shared Classes and types/model/IPost';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   // _url:string="assets/Data/Product.json";
   _url:string="https://jsonplaceholder.typicode.com/posts";
   //inject httpClient
     constructor(private Http : HttpClient) { }
     // 
     GetAllPost():Observable<IPost[]>
     {
     //  //htttp post , get 
      return this.Http.get<IPost[]>(this._url).pipe(catchError((err)=>{
       return throwError(()=>err.message || "Server Error ");
      }));
     }
}
