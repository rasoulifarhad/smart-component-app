import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from './shared/model/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {


  findAllLessons() : Observable<Lesson[]> {
    return of([]);
  }

  constructor() { }
}
