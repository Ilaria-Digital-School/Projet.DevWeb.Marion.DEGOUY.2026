import { Component } from '@angular/core';
import { BannerIndex } from '../banner-index/banner-index';
import { MovingText } from '../moving-text/moving-text';
import { Categories } from '../categories/categories';
import { Marques } from '../marques/marques';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [BannerIndex, MovingText, Categories, Marques, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
