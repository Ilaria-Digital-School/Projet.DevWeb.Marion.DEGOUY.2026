import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAbout } from './banner-about';

describe('BannerAbout', () => {
  let component: BannerAbout;
  let fixture: ComponentFixture<BannerAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
