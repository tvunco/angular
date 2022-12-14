import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FercontactComponent } from './fercontact.component';

describe('FercontactComponent', () => {
  let component: FercontactComponent;
  let fixture: ComponentFixture<FercontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FercontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
