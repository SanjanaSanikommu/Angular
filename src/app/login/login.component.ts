import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private service: UserService) { }

  ngOnInit() {
  }
  Login(logForm){
  console.log(logForm);
  if(logForm.username === 'admin' && logForm.password === 'admin'){
    this.service.setUserLoggin();
this.router.navigate(['empshow']);
  }
  }
}
