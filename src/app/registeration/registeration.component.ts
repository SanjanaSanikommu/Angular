import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
employee: any;
  constructor() { }

  ngOnInit() {
  this.employee = {
    name: '',
    studentID: '',
    phone: '',
    salary: '',
    gender: '',
    date : ''
    
    };
   
    }
  registeration(empForm){
    this.employee = [empForm];
  }
  
  
  
  }


