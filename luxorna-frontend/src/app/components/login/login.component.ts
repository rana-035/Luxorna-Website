import { Component, OnInit, Injectable, InjectionToken } from '@angular/core';
import { Router} from '@angular/router';
import {AdminLoginService} from 'src/app/services/admin-login.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit  {
  
     
  constructor(private router:Router,private service:AdminLoginService) { }
  

  email
  password
  subscriber
  admin
  loginMessage=true

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  get f(){

    return this.form.controls;

  }
  submit(){


    console.log(this.form.value);
    this.admin={UserName:this.email,Password:this.password}

   this.subscriber=this.service.getAdminToken(this.admin)
    .subscribe(    
     (adminData:any)=>{  
      
       if(adminData && adminData.Token )
       { 
        // localStorage.clear();
           //console.log(adminData);
          //  console.log(adminData.Token);
         localStorage.setItem('adminData',JSON.stringify(adminData));
         localStorage.setItem('token',adminData.Token);

         //console.log(localStorage.getItem('token'));
        //  console.log(localStorage.getItem('adminData'));
         
         this.router.navigate(['adminlayout']);
        
       }
      else{this.loginMessage=false;
        console.log("bra ya la")}
           
      
     },
     (err) => {
       console.log(err)
     }
     
    );

  }
  hide()
  {
    console.log("hide1");
    this.loginMessage=true;
    console.log("hide2");

  }

  ////////////
  

// getResturantById(id){
//   return this.httpClient.get(`${this.path}GetResturantByID/${id}`,{headers:this.getHeader()})
// }


// }
}