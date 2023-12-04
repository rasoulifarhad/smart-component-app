import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { LessonsService } from '../lessons.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons: Lesson[]= [];

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.lessonsService.findAllLessons()
            .pipe(
              tap(console.log)
            )
            .subscribe(
              lessons => this.lessons = lessons
            );

  }

  selectLesson(lesson: Lesson) {

  }
}
