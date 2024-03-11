import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfilePicturesComponent } from './components/user-details/profile-picture/profile-pictures/profile-pictures.component';
import { SteamIdComponent } from './components/user-details/steam-id/steam-id.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserDetailsComponent,
    ProfilePicturesComponent,
    SteamIdComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
