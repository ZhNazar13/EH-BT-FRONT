import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSubjectControlComponent } from './catalog-subject-control.component';

describe('CatalogSubjectControlComponent', () => {
  let component: CatalogSubjectControlComponent;
  let fixture: ComponentFixture<CatalogSubjectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogSubjectControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSubjectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
