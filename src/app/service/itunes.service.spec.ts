import { TestBed, inject } from '@angular/core/testing';

import { ItunesService } from './itunes.service';

describe('ItunesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesService]
    });
  });

  it('should be created', inject([ItunesService], (service: ItunesService) => {
    expect(service).toBeTruthy();
  }));
});
