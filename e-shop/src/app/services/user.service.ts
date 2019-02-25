import { Injectable } from '@angular/core';
import { User } from '../entities/user.entity';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/users"

    private users: User;

    constructor(private http: HttpClient) {}


    getAllPosts(): Observable<User> {
        return this.http.get<User>(this.baseUrl);
    }

    save(user: User): any{
      return this.http.post<User>(this.baseUrl, user);
    }

    findAll(): User { 
        return this.users;
    }

    

}