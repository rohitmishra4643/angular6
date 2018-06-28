import { Component, OnInit } from '@angular/core';
import {Response,Headers} from '@angular/Http';
import{HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient) { }
  confirmationString:string="new Product is added";
  isAdded:boolean=false;
  productobj:object={};
  addNewProduct=function(product){
  this.productobj={
    "name":product.name,
    "color":product.color,
  }
  this.http.post("http://localhost:4100/products/",this.productobj).subscribe((res:Response)=>{
    console.log(res);
    this.isAdded=true;
  })
}
  ngOnInit() {
  }

}
