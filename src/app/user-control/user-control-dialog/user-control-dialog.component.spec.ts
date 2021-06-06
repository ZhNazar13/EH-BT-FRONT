import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlDialogComponent } from './user-control-dialog.component';

describe('DialogContentExampleDialogComponent', () => {
  let component: UserControlDialogComponent;
  let fixture: ComponentFixture<UserControlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserControlDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
