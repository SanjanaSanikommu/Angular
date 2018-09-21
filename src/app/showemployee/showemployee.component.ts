import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})
export class ShowemployeeComponent implements OnInit {
 
  constructor() { }

   employee = [{ name: "Sanjana",studentID: 2, phone: 9999999, salary:"120000" },{ name: "San",studentID:"1",phone: 9999999, salary:"120000"},{ name: "Sanju",studentID:"3",phone: 9999999, salary:"120000" }]
  
  ngOnInit(){
    
    
  }
  value: any
  display(empForm){
    this.value.add(empForm);
  }
  
  

}
