import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerfooterComponent } from './ferfooter.component';

describe('FerfooterComponent', () => {
  let component: FerfooterComponent;
  let fixture: ComponentFixture<FerfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
