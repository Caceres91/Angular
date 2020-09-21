import { TestBed } from '@angular/core/testing';

import { ApinodejsService } from './apinodejs.service';

describe('ApinodejsService', () => {
  let service: ApinodejsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinodejsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
