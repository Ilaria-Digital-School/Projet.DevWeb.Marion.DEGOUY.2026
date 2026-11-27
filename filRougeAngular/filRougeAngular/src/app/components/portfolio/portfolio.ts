import { Component } from '@angular/core';
import { BannerPortfolio } from '../banner-portfolio/banner-portfolio';
import { MovingText } from '../moving-text/moving-text';
import { Prestations } from '../prestations/prestations';

@Component({
  selector: 'app-portfolio',
  imports: [BannerPortfolio, Prestations, MovingText],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

}
