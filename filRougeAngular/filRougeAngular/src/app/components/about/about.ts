import { Component } from '@angular/core';
import { BannerAbout } from '../banner-about/banner-about';
import { ContactForm } from '../contact-form/contact-form';
import { MovingText } from '../moving-text/moving-text';
import { ScrollTopButton } from '../scroll-top-button/scroll-top-button';

@Component({
  selector: 'app-about',
  imports: [BannerAbout, ContactForm, MovingText, ScrollTopButton],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
