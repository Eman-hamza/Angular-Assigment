import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { SpecificProductComponent } from './specific-product/specific-product.component'
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DiscountComponent } from './discount/discount.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { NotesComponent } from './notes/notes.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProductComponent,
    ChildComponent,
    ParentComponent,
    CategoryComponent,
    SpecificProductComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    LoginComponent,
    SigninComponent,
    PageNotFoundComponent,
    DiscountComponent,
    NoDiscountComponent,
    NotesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
