import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises-nav',
  templateUrl: './exercises-nav.component.html',
  styleUrls: ['./exercises-nav.component.scss']
})
export class ExercisesNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signOut():void {
    console.log("hello");
    this.router.navigate(['/home'])
  }
}
