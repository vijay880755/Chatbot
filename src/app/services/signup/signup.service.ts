import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : Http) { }
  public signup(data){
    return this.http.post('https://reqres.in/api/register',data);
  }
}
