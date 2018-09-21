import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycompoent',
  templateUrl: './mycompoent.component.html',
  styleUrls: ['./mycompoent.component.css']
})
export class MycompoentComponent implements OnInit {
  message:string;
  constructor() { 
  
  }

  ngOnInit() {
    this.message = "THIS IS MY APP";
    
  }
  

}
