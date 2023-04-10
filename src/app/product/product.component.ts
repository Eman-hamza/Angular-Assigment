import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../Shared Classes and types/model/iproduct';
import { ICategory } from '../Shared Classes and types/model/icategory';
import { DiscountOffers } from '../Shared Classes and types/model/DiscountOffers'
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
   constructor(private productServices:ProductService,private router:Router,private _active:ActivatedRoute) {
  }
  errormessage:any;
  Discount= DiscountOffers.Ten;
  IsDisount:boolean=true;
  IsBuyCancel:string="Buy";
  StoreName:string="PIXI Store"
  StoreLogo:string="assets/cloths.png"
  ProductList:any=[]
  Product:any
  // ProductList:IProduct[] = [
  //   {ID: 1, Name: "Product1",Quantity:10,Price:3000,Img:"assets/one.jpg"},
  //   {ID: 2, Name: "Product2",Quantity:2,Price:5000,Img:"assets/two.jpg"},
  //   {ID: 3, Name: "Product3",Quantity:3,Price:3000,Img:"assets/three.jpg"},
  // ]
  selected = "----"
  Date(e:any){
    this.selected = e.target.value
  }
  ClientName="Eman Hamza"
  IsPurshased!:boolean; 


  showmsg() {
      this.IsPurshased=!this.IsPurshased;
      this.IsBuyCancel="Cancel";
  }
  messageFromChild:any;
  ngOnInit(): void {
  // this.ProductList=this.productServices.GetAllProducts();
  this.ProductList=this.productServices.GetAllProducts().subscribe(
    {
      next:Productdata=>this.ProductList=Productdata
    }
  )
}
@Output() ChildEventP = new EventEmitter();
renderValues(){
  // this.Product=this.productServices.GetAllProducts();
  this.Product=this.productServices.GetAllProducts().subscribe(
   {
    next:ProductData=>this.ProductList=ProductData,
    error:error=>this.errormessage=error
   } 
  )
  this.ChildEventP.emit(this.ProductList);
}
onselect(){
  // this.router.navigate(["Discount"])
}
withDis(){
this.router.navigate(["discount"],{relativeTo:this._active})
}
withoutDis(){
  this.router.navigate(["NoDiscount"],{relativeTo:this._active})
}
}