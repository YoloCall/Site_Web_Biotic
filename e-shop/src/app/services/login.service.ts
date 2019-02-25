import { Injectable } from '@angular/core';
import { LogIn } from '../entities/login.entity';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { User } from '../entities/user.entity';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:3000/login"

    private login: LogIn;

    constructor(private http: HttpClient) { }


    getAllPosts(): Observable<LogIn> {
        return this.http.get<LogIn>(this.baseUrl);
    }

    save(login: LogIn): any{
      return this.http.post<LogIn>(this.baseUrl, login);
    }

    findAll(): LogIn  { 
        return this.login;
    }

    getUserByUsernameAndPassword(user ): Observable<User> {
      return this.http.get<User>(this.baseUrl + '/' + user['username'] + '/' + user['password']);
    }
}
