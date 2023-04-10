import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  constructor(private postServices:CommentService,private activeRoute:ActivatedRoute) {
    //  this.nono="fffffffff"
  }
  CommentList:any=[]
  postId:any
  ngOnInit(): void {
    // this.ProductList=this.productServices.GetAllProducts();
    this.activeRoute.paramMap.subscribe((params:ParamMap)=>{
      this.postId=params.get("id");
    })
    this.CommentList=this.postServices.GetAllComment(this.postId).subscribe(
      {
        next:Commentdata=>this.CommentList=Commentdata
      }
    )
  }

}
