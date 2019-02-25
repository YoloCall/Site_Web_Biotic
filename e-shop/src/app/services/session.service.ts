import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

status : boolean = false;
nom : string;

  constructor() { }

  getnom () {
    if (this.nom == undefined) {
      this.status = false;
      return this.nom;
    }else {
      return this.nom;
    }
  }

  setnom(nom : string) {
    this.nom = nom;
    if (this.nom == undefined) {
      this.status = false;
    }else{
      this.status = true;
    }
  }

  getstatus () {
    if (this.status == false) {
      this.nom = undefined;
      return this.status;
    }else{
      return this.status;
    }
  }

  setstatus (status) {
    this.status = status;
    console.log(this.getstatus);
  }

  

}
