import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private productServices:UserService,private router:Router) {
    //  this.nono="fffffffff"
  }
  UserList:any=[]
  ngOnInit(): void {
    // this.ProductList=this.productServices.GetAllProducts();
    this.UserList=this.productServices.GetAllUser().subscribe(
      {
        next:Userdata=>this.UserList=Userdata
      }
    )
  }
  onselect(post:any){
    this.router.navigate(["/post",post.id])
  }
}
