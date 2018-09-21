import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: any[];
  constructor() {
this.products=[
  {id:101,name:"Mercedes",
  price: 10000000,
  des: "This is Benz. It empowers life" ,
  imagepath:'assets/images/101.jpg'},
  {id:102,name:"Bugatti",
  price: 100000,
  des: "This is Buggati.The brand new car available only in India" ,
  imagepath:'assets/images/102.jpg'},
 

  {id:104,name:"Ferrari",
  price: 200,
  des: "This is Ferrai" ,
  imagepath:'assets/images/104.jpg'},
  {id:105,name:"BMW",
  price: 10000000,
  des: "This is one of the best selling car in INdia",
  imagepath:'assets/images/105.jpg'}







]

   }

  ngOnInit() {
  }

}
