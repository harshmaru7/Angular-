import { TestBed } from '@angular/core/testing';

import { FetchpostsService } from './fetchposts.service';

describe('FetchpostsService', () => {
  let service: FetchpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
