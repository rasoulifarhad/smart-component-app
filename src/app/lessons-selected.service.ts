import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Lesson } from './shared/model/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsSelectedService {

  private _selected:  BehaviorSubject<Lesson> = new BehaviorSubject<Lesson>({description: '', duration: 0});

  public selected$ = this._selected.asObservable().pipe(filter(lesson => !!lesson));

  constructor() { }

  select(lesson: Lesson) {
    this._selected.next(lesson);
  }
}
