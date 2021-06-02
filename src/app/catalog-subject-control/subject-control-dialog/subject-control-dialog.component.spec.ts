import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectControlDialogComponent } from './subject-control-dialog.component';

describe('SubjectControlDialogComponent', () => {
  let component: SubjectControlDialogComponent;
  let fixture: ComponentFixture<SubjectControlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectControlDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectControlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
