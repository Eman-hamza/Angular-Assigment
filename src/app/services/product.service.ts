import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/model/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _url:string="assets/Data/Product.json";
//inject httpClient
  constructor(private Http : HttpClient) { }
  // 
  GetAllProducts():Observable<IProduct[]>
  {
  //  //htttp post , get 
   return this.Http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server Error ");
   }));
  }
  
  products:any = this.GetAllProducts(); 

  GetProductByID(prodID:number){
  
   this.products.forEach((((element: { id: number; name: any; quantity: any; price: any; img: any; })=> {
     if(element.id == prodID){
       return {id:element.id , name:element.name , quantity : element.quantity , price : element.price 
        , img:element.img}
     }
     return null;
      
    })))
  }
}
