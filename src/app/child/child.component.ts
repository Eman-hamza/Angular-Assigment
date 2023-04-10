import { Component, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
constructor(public ProductSer:ProductService){}
@Output() EventChild = new EventEmitter()
Product:any;
// SendData(){
//   console.log(this.ProductSer.GetAllProducts());
// //  this.EventChild.emit(this.ProductSer.GetAllProducts());
// }
SayWelcome(){
  console.log("Welcome")
} 
}
