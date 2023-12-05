import { TestBed } from '@angular/core/testing';

import { LessonsSelectedService } from './lessons-selected.service';

describe('LessonsSelectedService', () => {
  let service: LessonsSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonsSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
