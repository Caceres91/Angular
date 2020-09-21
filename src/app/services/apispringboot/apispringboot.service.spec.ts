import { TestBed } from '@angular/core/testing';

import { ApispringbootService } from './apispringboot.service';

describe('ApispringbootService', () => {
  let service: ApispringbootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApispringbootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
