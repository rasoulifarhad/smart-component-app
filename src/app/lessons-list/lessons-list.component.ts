import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent {

  @Input()
  lessons?: Lesson[];

  @Output('lesson')
  lessonEmitter = new EventEmitter<Lesson>();

  selectLesson(lesson: Lesson) {
    this.lessonEmitter.emit(lesson);
  }
}
