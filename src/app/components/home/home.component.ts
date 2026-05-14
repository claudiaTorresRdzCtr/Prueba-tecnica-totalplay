import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfianComponent } from '../confian/confian.component';
import { PlanesComponent } from '../planes/planes.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule,
    HeroComponent,
    PlanesComponent,
    ConfianComponent],
})

export class HomeComponent {

}