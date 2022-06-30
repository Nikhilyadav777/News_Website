import { TestBed } from '@angular/core/testing';

import { NewasapiService } from './newasapi.service';

describe('NewasapiService', () => {
  let service: NewasapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewasapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
