import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MycompoentComponent } from './mycompoent/mycompoent.component';
import { RegisterationComponent } from './registeration/registeration.component';

import { EmpshowComponent } from './empshow/empshow.component';
import { AgePipe } from './age.pipe';
import { GenderPipe } from './gender.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import {  HttpClientModule } from '@angular/common/http';


const appRoots: Routes = [{

path: 'empshow',
canActivate: [AuthGuard],
component: EmpshowComponent
},
{
  path: 'Register',
  component:  RegisterationComponent
  
  
  },
  {
    path: 'login',
    component:  LoginComponent
    
    
    },
    {
      path: 'products',
      canActivate: [AuthGuard],
      component: ProductsComponent
      
      
      }
]


@NgModule({
  declarations: [
    AppComponent,
    MycompoentComponent,
    RegisterationComponent,
    
    EmpshowComponent,
    AgePipe,
    GenderPipe,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoots),BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
