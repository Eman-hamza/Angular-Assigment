import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit{
  constructor(private _productser:ProductService){}
  someProduct:any=[]
  ngOnInit(): void {
    this._productser.GetAllProducts().subscribe((Data)=>{
      this.someProduct=Data;
    })
  }
}
