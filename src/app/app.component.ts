import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanesComponent } from './components/planes/planes.component';
import { HeroComponent } from './components/hero/hero.component';
import { ConfianComponent } from './components/confian/confian.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    PlanesComponent,
    HeroComponent,
    ConfianComponent,
    HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'Prueba Técnica Totalplay';
}
