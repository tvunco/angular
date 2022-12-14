import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerinicioComponent } from './ferinicio.component';

describe('FerinicioComponent', () => {
  let component: FerinicioComponent;
  let fixture: ComponentFixture<FerinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerinicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
