import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: '', component: MainpanelComponent }
  // { path: 'profile', component: }
];

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
