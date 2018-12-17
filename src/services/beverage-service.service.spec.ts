import { TestBed } from '@angular/core/testing';

import { BeverageServiceService } from './beverage-service.service';

describe('BeverageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeverageServiceService = TestBed.get(BeverageServiceService);
    expect(service).toBeTruthy();
  });
});
