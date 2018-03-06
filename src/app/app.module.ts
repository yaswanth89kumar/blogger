import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LeftpanelComponent } from './content/leftpanel/leftpanel.component';
import { RightpanelComponent } from './content/rightpanel/rightpanel.component';
import { MainpanelComponent } from './content/mainpanel/mainpanel.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './content/leftpanel/profile/profile.component';
import { PostComponent } from './post/post.component';
import { FollowersComponent } from './followers/followers.component';
import { QueriesComponent } from './queries/queries.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessagesService } from './services/messages.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', component: MainpanelComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'profile', component: ProfileComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyDtosNWTZfqYAXRrx4O8thTeKdhl5S81wY",
  authDomain: "tech-blogger-80096.firebaseapp.com",
  databaseURL: "https://tech-blogger-80096.firebaseio.com",
  projectId: "tech-blogger-80096",
  storageBucket: "tech-blogger-80096.appspot.com",
  messagingSenderId: "130911662137"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LeftpanelComponent,
    RightpanelComponent,
    MainpanelComponent,
    RegisterComponent,
    ProfileComponent,
    PostComponent,
    FollowersComponent,
    QueriesComponent,
    InboxComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [MessagesService, AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

