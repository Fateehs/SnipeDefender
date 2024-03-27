import { Component } from '@angular/core';
import { PlayerService } from '../../services/common/player.service';
import { Player } from '../../entities/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  searchQuery: string;
  player: Player;

  constructor(private playerService: PlayerService, private router: Router) {}

  onSubmit() {
    this.playerService.getPlayerBySteamId(this.searchQuery).subscribe(
      (result: Player) => {
        this.player = result;
        console.log(this.player.id);
        this.goToProfile(this.player.id);
      },
      (error) => {
        this.playerService.getPlayerByName(this.searchQuery).subscribe(
          (result: Player) => {
            this.player = result;
            console.log(this.player.id);
            this.goToProfile(this.player.id);
          },
          (error) => {
            console.error('Player not found');
          }
        );
      }
    );
  }

  goToProfile(playerId: number) {
    this.router.navigate(['/playerdetails'], { queryParams: { id: playerId } });
  }
}
