import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  displayProgram: boolean = false;
  displayFavorites: boolean = false;
  user: string = 'Lisa'

  constructor() { }

  ngOnInit(): void {
  }

  showProgram() : void {
    this.displayProgram = true;
    this.displayFavorites = false;
  }

  hideProgram() : void {
    this.displayProgram = false;
  }

  showFavorites() : void {
    this.displayFavorites = true;
    this.displayProgram = false;

  }

  hideFavorites() : void {
    this.displayFavorites = false;
  }
}
