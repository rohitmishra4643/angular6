import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpClientModule} from'@angular/common/http';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  id:number;
  private headers=new Headers({'Content-Type':'application/json'});
      products=[];
  fetchData=function() {
           
    this.http.get("http://localhost:4100/products").subscribe(
      (res: Response)=>{
        this.products = res;
      }
    )
  }
  deleteProduct=function(id){
    if(confirm("are you sure")){
      const url=  `${"http://localhost:4100/products"}/${id}`;
      return this.http.delete(url,{headers:this.headers}).toPromise().then(()=>{
          this.fetchData();
        
      })
    }
  }

 ngOnInit() {
this.fetchData();
  }

}
