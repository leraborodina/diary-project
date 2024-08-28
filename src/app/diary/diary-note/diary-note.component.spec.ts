import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNoteComponent } from './diary-note.component';

describe('DiaryNoteComponent', () => {
  let component: DiaryNoteComponent;
  let fixture: ComponentFixture<DiaryNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaryNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiaryNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
