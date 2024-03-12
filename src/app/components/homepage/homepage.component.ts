import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  backendVerileri = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one',
  ];
}
