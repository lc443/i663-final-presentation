import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  display: boolean = false;
  user: string = 'Lisa'

  constructor() { }

  ngOnInit(): void {
  }

  showProgram() : void {
    this.display = true;
  }

  hideProgram() : void {
    this.display = false;
  }
}
