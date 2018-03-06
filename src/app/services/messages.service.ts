import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { messageModal } from "../modals/message.modal";

@Injectable()
export class MessagesService {

  public messages: messageModal[];

  constructor(private http: Http) {

  }

  public saveMessage(): Observable<messageModal[]> {
    let data = [{
      user: 1,
      message: "abey saaley"
    },{
      user: 2,
      message: "hey darling"
    }];
    return this.http.put('https://tech-blogger-80096.firebaseio.com/messages.json', data).map((res: Response)=>res.json());
  }

  public getMessage(): Observable<messageModal[]> {
    return this.http.get('https://tech-blogger-80096.firebaseio.com/messages.json').map((res: Response)=>res.json());
  }

}
