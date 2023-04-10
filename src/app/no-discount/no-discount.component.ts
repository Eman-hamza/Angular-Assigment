import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-no-discount',
  templateUrl: './no-discount.component.html',
  styleUrls: ['./no-discount.component.scss']
})
export class NoDiscountComponent implements OnInit{
  constructor(private _productser:ProductService){}
  someProduct:any=[]
  ngOnInit(): void {
    this._productser.GetAllProducts().subscribe((Data)=>{
      this.someProduct=Data;
    })
}
}
