import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNoteFormComponent } from './diary-note-form.component';

describe('DiaryNoteFormComponent', () => {
  let component: DiaryNoteFormComponent;
  let fixture: ComponentFixture<DiaryNoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaryNoteFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiaryNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
