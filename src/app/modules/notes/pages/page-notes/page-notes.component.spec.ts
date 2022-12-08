import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotesComponent } from './page-notes.component';

describe('PageNotesComponent', () => {
  let component: PageNotesComponent;
  let fixture: ComponentFixture<PageNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
