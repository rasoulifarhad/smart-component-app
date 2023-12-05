import { Component } from '@angular/core';
import { LessonsSelectedService } from '../lessons-selected.service';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'custom-lessons-list',
  templateUrl: './custom-lessons-list.component.html',
  styleUrls: ['./custom-lessons-list.component.css']
})
export class CustomLessonsListComponent {

  lessons?: Lesson[];

  constructor(private lessonSelectedService: LessonsSelectedService) {

  }

  selectLesson(lesson: Lesson) {
    this.lessonSelectedService.select(lesson);
  }
}
