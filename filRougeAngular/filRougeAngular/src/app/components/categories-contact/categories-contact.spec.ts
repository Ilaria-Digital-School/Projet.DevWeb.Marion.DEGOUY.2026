import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesContact } from './categories-contact';

describe('CategoriesContact', () => {
  let component: CategoriesContact;
  let fixture: ComponentFixture<CategoriesContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
