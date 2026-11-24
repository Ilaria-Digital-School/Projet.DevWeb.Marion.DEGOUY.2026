import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderHome } from './components/header-home/header-home';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderHome, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('filRougeAngular');
}
