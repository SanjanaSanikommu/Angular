import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-empshow',
  templateUrl: './empshow.component.html',
  styleUrls: ['./empshow.component.css']
})
export class EmpshowComponent implements OnInit {
  employees:any;

  constructor(private service:UserService) { }

  ngOnInit() {
   // this.service.getAllEmployees().subscribe(data => this.employees = data);
   this.service.getAllEmployees().subscribe(data => {console.log(data);});
  }

}
