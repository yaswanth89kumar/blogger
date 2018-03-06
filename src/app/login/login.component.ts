import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    state: string = '';
    error: any;
    username: string;

    constructor(public af: AngularFireAuth, private router: Router) {
      this.af.authState.subscribe(
        res => {
          if (res != null) {
            this.router.navigate(['/profile']);
          }
      });
  }
  ngOnInit() {}

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (res) => {
        if(res.hasOwnProperty('user')){
          this.router.navigate(['/profile']);
        }
    });
  }

}
