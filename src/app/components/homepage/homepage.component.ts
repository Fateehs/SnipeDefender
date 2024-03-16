import { Component, OnInit } from '@angular/core';
import { Player } from '../../entities/player';
import { PlayerService } from '../../services/common/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (data) => {
        this.players = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  goToProfile(player:any){
    this.router.navigate(['/playerdetails'], {queryParams: {id: player.id}});
  }
}
