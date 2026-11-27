import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContact } from './banner-contact';

describe('BannerContact', () => {
  let component: BannerContact;
  let fixture: ComponentFixture<BannerContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
