import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerprofolioComponent } from './ferprofolio.component';

describe('FerprofolioComponent', () => {
  let component: FerprofolioComponent;
  let fixture: ComponentFixture<FerprofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerprofolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerprofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
