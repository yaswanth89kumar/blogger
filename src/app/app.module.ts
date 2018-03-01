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
import { ProfileComponent } from './profile/profile.component';
import { UserleftpanelComponent } from './profile/userleftpanel/userleftpanel.component';
import { UsermainpanelComponent } from './profile/usermainpanel/usermainpanel.component';
import { UserrightpanelComponent } from './profile/userrightpanel/userrightpanel.component';

const appRoutes: Routes = [
  { path: '', component: MainpanelComponent },
  { path: 'profile', component: ProfileComponent}
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
    UserleftpanelComponent,
    UsermainpanelComponent,
    UserrightpanelComponent
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
