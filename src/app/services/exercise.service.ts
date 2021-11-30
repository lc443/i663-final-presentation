import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../classes/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private baseUrl = "http://localhost:8080/exercises";

  constructor(private http: HttpClient) { }

  createExercise(exercise: Exercise): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, exercise);
  }

  getExercise(id: number): Observable<Exercise> {
    return this.http.get<Exercise>(`${this.baseUrl}/${id}`);
  }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.baseUrl}`);
  }

  updateExercises(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteExercise(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
