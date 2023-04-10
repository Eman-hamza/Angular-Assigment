import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(private CategoryServices:CategoryService,private router:Router){}
  CategoryList:any=[]


  ngOnInit(): void {
    // this.ProductList=this.productServices.GetAllProducts();
    this.CategoryList=this.CategoryServices.GetAllCategory().subscribe(
      {
        next:categorydata=>this.CategoryList=categorydata
      }
    )
  }
  onselect(Cat:any){
    this.router.navigate(["CatProduct",Cat.ID])
  }
}
