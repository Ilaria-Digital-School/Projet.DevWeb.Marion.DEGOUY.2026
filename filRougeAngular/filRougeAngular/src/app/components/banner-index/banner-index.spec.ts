import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerIndex } from './banner-index';

describe('BannerIndex', () => {
  let component: BannerIndex;
  let fixture: ComponentFixture<BannerIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
