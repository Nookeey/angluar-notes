import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesModalCreateComponent } from './notes-modal-create.component';

describe('NotesModalCreateComponent', () => {
  let component: NotesModalCreateComponent;
  let fixture: ComponentFixture<NotesModalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesModalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesModalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
