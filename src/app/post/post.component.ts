import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private postServices:PostService,private router:Router) {
    //  this.nono="fffffffff"
  }
  PostList:any=[]
  ngOnInit(): void {
    // this.ProductList=this.productServices.GetAllProducts();
    this.PostList=this.postServices.GetAllPost().subscribe(
      {
        next:Postdata=>this.PostList=Postdata
      }
    )
  }
  onselect(post:any){
    this.router.navigate(["/Comment",post.id])
  }
}
