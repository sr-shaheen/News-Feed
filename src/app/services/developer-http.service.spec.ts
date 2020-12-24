import { TestBed } from '@angular/core/testing';

import { DeveloperHttpService } from './developer-http.service';

describe('DeveloperHttpService', () => {
  let service: DeveloperHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
