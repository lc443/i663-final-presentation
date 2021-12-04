import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Exercise } from 'src/app/classes/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  showMore = true;
  searchText;
  displayedExercises: Exercise[] = [];
  //exercises: Exercise[];
  exercises = [
    {
      id: 1,
      exerciseName: 'Pull Up',
      categoryName: 'Upper Body',
      exerciseDescription: ''
    },
    {
      id: 2,
      exerciseName: 'Chest Press',
      categoryName: 'Chest'
    },
    {
      id: 3,
      exerciseName: 'Shoulder Press',
      categoryName: 'Shoulders'
    },
    {
      id: 4,
      exerciseName: 'Lateral Row',
      categoryName: 'Back'
    }

  ]
  exercise: Exercise = new Exercise();
  clicked = false;
  filteredExercises: Exercise[] = [];
  displayedLoadMoreButton: boolean;
  focusRecord: number = 0;
  loadMoreClicked: Subject<number> = new Subject<number>();
  
  
  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService, private router: Router) { }
  ngOnInit(): void {
    //this.getExercises()
  }

  // getExercises(): Exercise[]{
  //   this.showMore = false;
  //   this.exerciseService.getExercises().pipe(
  //   ).subscribe(
  //     data => this.exercises = data.sort((a, b)=>{
  //       return a.categoryName  == b.categoryName?0:a.categoryName > b.categoryName? 1:-11
  //     }),
  //     error => console.log(error)
  //   );
  //   return this.exercises;
  // }


  hideButton(): void {
    this.clicked = false;
  }

  displayButton():any {
     this.clicked = true;
    if(this.clicked = true) {
   
      return this.setDisplayedExercises();
      
    }

  } 


    loadMore(clicked?: boolean): void {
      if(clicked) {
        const valuesDisplayed = this.displayedExercises.length;
        this.updateDisplayedExercises(valuesDisplayed);
      } else {
        this.updateDisplayedExercises(0);
      }
    }

    setDisplayedExercises(clicked?: boolean): void {
      if(clicked) {
        const valueDisplayed = this.displayedExercises.length;
        this.focusRecord = this.displayedExercises.length
        this.updateDisplayedExercises(valueDisplayed);
        this.displayedExercises;
        this.emitLoadMoreClicked();
      } else {
        this.focusRecord = 0;
        this.updateDisplayedExercises(0);
        this.displayedExercises;
      }
    }
    emitLoadMoreClicked(): void {
      this.loadMoreClicked.next(this.focusRecord)
    }
    
    updateDisplayedExercises(valueDisplayed: number): void {
      if(this.filteredExercises.length - valueDisplayed > 10) {
        this.displayedExercises = this.filteredExercises.slice(0, valueDisplayed + 20);
        this.displayedLoadMoreButton = true;
      } else {
        this.displayedExercises = this.filteredExercises.slice(0);
        this.displayedLoadMoreButton = false;
      }
    }
  }

