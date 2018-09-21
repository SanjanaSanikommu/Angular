import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

  
/*export class AppComponent implements OnInit {
  ngOnInit() {
   this.name = "SANJANA";
    this.age = 20
    this.isAngular=false;
    this.remarks="YES";

  }
  title = 'Heaven';
  name: string;
  age: number;
  isAngular: boolean;
  remarks: any;
  constructor(){

    } */
export class AppComponent implements OnInit {
  
  name: string;
  studentID:  number;
  
  /*studentList = [{name:string,studentID:number}];
   constructor() {}
    ngOnInit() {}
   onStudentCreate(){
   console.log(this.name, this.studentID}
   this.studentList.push({name = this.name , studentID = this.studentID});
   this.name = '';
   this.studentID = 0;
   }
   
   */
  

  students = [{ name: "Sanjana",id: 2 },{ name: "San",id:"1" },{ name: "Sanju",id:"3" }]
  choice = " ";
  ngOnInit(){

    this.choice = this.students[1].name;
  }

 }



