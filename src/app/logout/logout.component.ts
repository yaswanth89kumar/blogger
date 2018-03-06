import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private af: AngularFireAuth, private router: Router) {
    this.af.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
