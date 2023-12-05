import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLessonsListComponent } from './custom-lessons-list.component';

describe('CustomLessonsListComponent', () => {
  let component: CustomLessonsListComponent;
  let fixture: ComponentFixture<CustomLessonsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomLessonsListComponent]
    });
    fixture = TestBed.createComponent(CustomLessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
