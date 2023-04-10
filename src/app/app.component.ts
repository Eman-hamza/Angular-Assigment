import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  messageFromChild:any;
  @ViewChild(ProductComponent) child!: ProductComponent;
  ngAfterViewInit(){
    // this.child.Product;
  }
}