import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { UserService } from '../../services/common/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}