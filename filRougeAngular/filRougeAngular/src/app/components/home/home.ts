import { Component } from '@angular/core';
import { BannerIndex } from '../banner-index/banner-index';

@Component({
  selector: 'app-home',
  imports: [BannerIndex],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
