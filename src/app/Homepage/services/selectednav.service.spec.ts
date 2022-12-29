import { TestBed } from '@angular/core/testing';

import { SelectednavService } from './selectednav.service';

describe('SelectednavService', () => {
  let service: SelectednavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectednavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
