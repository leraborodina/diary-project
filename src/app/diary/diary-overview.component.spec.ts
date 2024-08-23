import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryOverviewComponent } from './diary-overview.component';

describe('DiaryOverviewComponent', () => {
  let component: DiaryOverviewComponent;
  let fixture: ComponentFixture<DiaryOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaryOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
