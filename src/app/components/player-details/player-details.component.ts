import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/common/player.service';
import { Player } from '../../entities/player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  playerId: number;
  playerData: Player;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.playerId = +params['id'];
      this.fetchPlayerDetails();
    });
  }

  fetchPlayerDetails() {
    this.playerService.fetchUserDetails(this.playerId).subscribe((data) => {
      this.playerData = data;
    });
  }
}
