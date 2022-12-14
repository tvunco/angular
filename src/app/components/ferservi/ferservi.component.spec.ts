import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerserviComponent } from './ferservi.component';

describe('FerserviComponent', () => {
  let component: FerserviComponent;
  let fixture: ComponentFixture<FerserviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerserviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerserviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
