import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'playerdetails', component: PlayerDetailsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
