import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesNavComponent } from './exercises-nav.component';

describe('ExercisesNavComponent', () => {
  let component: ExercisesNavComponent;
  let fixture: ComponentFixture<ExercisesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
