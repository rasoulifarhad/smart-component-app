import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { LessonsService } from '../lessons.service';
import { tap } from 'rxjs';
import { LessonsSelectedService } from '../lessons-selected.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons: Lesson[]= [];

  constructor(private lessonsService: LessonsService,
              private lessonSelectedService: LessonsSelectedService) {}

  ngOnInit(): void {
    this.lessonsService.findAllLessons()
            .pipe(
              tap(console.log)
            )
            .subscribe(
              lessons => this.lessons = lessons
            );
    this.lessonSelectedService.selected$.subscribe(lesson => this.selectLesson(lesson));
  }

  selectLesson(lesson: Lesson) {
    console.log('selectLesson: ', lesson);
  }
}
