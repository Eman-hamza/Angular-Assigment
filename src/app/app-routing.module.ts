import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DiscountComponent } from './discount/discount.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'Main',component:MainComponent},
  {path:'Product',component:ProductComponent,
  children:[{path:'discount',component:DiscountComponent},{path:'NoDiscount',component:NoDiscountComponent}]},
  // {
  {path:'Category',component:CategoryComponent},
  {path:'CatProduct/:id',component:SpecificProductComponent},
  {path:'User',component:UserComponent},
  {path:'Post',component:PostComponent},
  {path:'Comment/:id',component:CommentComponent},
  {path:'post/:id',component:PostComponent},
  {path:'Discount/:id',component:ProductComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signin',component:SigninComponent},
  {path:'notes',component:NotesComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
