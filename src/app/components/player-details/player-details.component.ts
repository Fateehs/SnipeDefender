import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/common/player.service';
import { Player } from '../../entities/player';
import { CommentService } from '../../services/common/comment.service';
import { Comment } from '../../entities/comment';
import { UserService } from '../../services/common/user.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
})
export class PlayerDetailsComponent implements OnInit {
  playerId: number;
  playerData: Player;
  showCommentComponent: boolean = false;
  comments: Comment[];
  commentUserName: string;
  totalReputation: number = 0;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.playerId = +params['id'];
      this.fetchPlayerDetails();
      this.getPlayerComments();
    });
  }

  fetchPlayerDetails() {
    this.playerService.fetchUserDetails(this.playerId).subscribe((data) => {
      this.playerData = data;
    });
  }

  toggleCommentComponent() {
    this.showCommentComponent = !this.showCommentComponent;
  }

  toggleReportComponent() {
    this.showCommentComponent = !this.showCommentComponent;
  }

  getPlayerComments() {
    this.commentService
      .getPlayerCommentsById(this.playerId)
      .subscribe((data: Comment[]) => {
        console.log(data);
        this.comments = data;
        this.calculateTotalReputation();
      });
  }

  calculateTotalReputation() {
    this.totalReputation = this.comments.reduce(
      (total, comment) => total + comment.reputation,
      0
    );
  }
}
