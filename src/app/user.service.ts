import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
isUserLoggedIn = false;
  constructor(private http:HttpClient) {
    this.isUserLoggedIn = false;
   }
   setUserLoggin()
   {
     this.isUserLoggedIn = true;
   }
   setUserLoggedOut()
   {
     this.isUserLoggedIn = false;
   }

getUserLoggedin() : any
{
  return this.isUserLoggedIn;
}
getAllEmployees()
{
  return this.http.get("RESTAP/webapi/myresource/getAllEmployees");
}

}
