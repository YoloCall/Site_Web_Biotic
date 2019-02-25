import { Component, OnInit } from '@angular/core';
import { LogIn } from '../../entities/login.entity';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import {SessionService} from "../../services/session.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LogIn;
  user: User;
  username;
  password;



  userFormLogIn = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required])
  });


  constructor(
    private LoginService: LoginService, http: HttpClient, private router: Router, private session : SessionService 
  ) { }


  ngOnInit() {
  }


  onFormLogInSubmit() {

   

    this.LoginService.getUserByUsernameAndPassword({ "username": this.userFormLogIn.get("username").value, "password": this.userFormLogIn.get("password").value }).subscribe(
			data => {
        if(data["login"][0].username){

          this.session.setnom(data["login"][0].username);

          // this.session.setstatus(true);
          console.log(this.session.getstatus());
          console.log(this.session.getnom());

          // console.log(data["login"][0].username);

          window.alert("Connexion Success !");
          this.router.navigate(['/','home']);

        }else{
          console.log("not ok"); 
          window.alert("Connexion Denied !"); 
        }
			  
			},
			errorCode => console.log(errorCode)
		);
  }

  

}


//Object.keys("username").length > 0 && Object.keys("password").length > 0){this.router.navigate(['/','home']
