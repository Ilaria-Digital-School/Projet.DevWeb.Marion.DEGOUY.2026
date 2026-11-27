import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marques } from './marques';

describe('Marques', () => {
  let component: Marques;
  let fixture: ComponentFixture<Marques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marques]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marques);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
