import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprestationForm } from './addprestation-form';

describe('AddprestationForm', () => {
  let component: AddprestationForm;
  let fixture: ComponentFixture<AddprestationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddprestationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprestationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
