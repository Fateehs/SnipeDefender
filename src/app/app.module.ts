import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SteamIdComponent } from './components/user-details/steam-id/steam-id.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserDetailsComponent,
    SteamIdComponent,
    HomepageComponent,
    HeaderComponent,
    LoginComponent,
    PlayerDetailsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
