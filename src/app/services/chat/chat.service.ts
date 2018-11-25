import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ChatService {
  baseURL='https://api.dialogflow.com/v1/query';
  accessToken="86a5685f638946e5b4e40bd7e4dd313f";
  constructor(private http:Http) { }
    public sendMessage(message:string){
      let data={
        lang:"en",
        sessionId:"1234",
        query:message,
      }
      let headers=new Headers();
      headers.append("Authorization","Bearer "+this.accessToken);
     return  this.http.post(this.baseURL,data,{headers:headers}).map(res => {
        return res.json()
      }) 
    }
}
