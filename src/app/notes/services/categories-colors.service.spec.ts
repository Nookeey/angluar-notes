import { TestBed } from '@angular/core/testing';

import { CategoriesColorsService } from './categories-colors.service';

describe('CategoriesColorsService', () => {
  let service: CategoriesColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
