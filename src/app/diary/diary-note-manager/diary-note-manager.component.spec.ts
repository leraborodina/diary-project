import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNoteManagerComponent } from './diary-note-manager.component';

describe('DiaryNoteManagerComponent', () => {
  let component: DiaryNoteManagerComponent;
  let fixture: ComponentFixture<DiaryNoteManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaryNoteManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryNoteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
