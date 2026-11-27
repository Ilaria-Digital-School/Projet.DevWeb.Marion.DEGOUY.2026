import { Component } from '@angular/core';
import { BannerContact } from '../banner-contact/banner-contact';
import { CategoriesContact } from '../categories-contact/categories-contact';
import { ContactForm } from '../contact-form/contact-form';
import { MovingText } from '../moving-text/moving-text';

@Component({
  selector: 'app-contact',
  imports: [BannerContact, CategoriesContact, ContactForm, MovingText],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
