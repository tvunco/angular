import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FersobremiComponent } from './fersobremi.component';

describe('FersobremiComponent', () => {
  let component: FersobremiComponent;
  let fixture: ComponentFixture<FersobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FersobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FersobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
