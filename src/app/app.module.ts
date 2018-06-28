import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from  '@angular/router';
import{HttpClientModule} from'@angular/common/http';
import { ProductComponent } from './product/product.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateComponentComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    
    FormsModule ,
     RouterModule.forRoot(
      [
        {path:"",component:HomeComponent},
        {path:"product",component:ProductComponent},
        {path:"updateProduct/:id",component:UpdateComponentComponent}
      ]),
      HttpClientModule,
      
  ], 
  schemas: [ NO_ERRORS_SCHEMA ], 
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
