import { TestBed, inject } from '@angular/core/testing';

import { LncliService } from './lncli.service';

describe('LncliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LncliService]
    });
  });

  it('should be created', inject([LncliService], (service: LncliService) => {
    expect(service).toBeTruthy();
  }));
});
