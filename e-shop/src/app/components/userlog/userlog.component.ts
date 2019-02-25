import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-user-log',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})



export class UserLogComponent implements OnInit {

  user: User;


  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  constructor(
    private userService: UserService, http: HttpClient
  ) {}


  ngOnInit() {}


  onFormSubmit()  {

    this.user = { username: this.userForm.get('username').value,
      email : this.userForm.get('email').value,
      password: this.userForm.get('password').value
    };

    this.userService.save(this.user).subscribe((res) => {
      console.log(res), (error) => console.log(error);
    });

  }
}