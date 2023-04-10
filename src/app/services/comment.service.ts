import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../Shared Classes and types/IComment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

//inject httpClient
  constructor(private Http : HttpClient) { }
  // 
  GetAllComment(Id:any):Observable<IComment[]>
  {
  //  //htttp post , get 
   return this.Http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${Id}/comments`).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server Error ");
   }));
  }
}
