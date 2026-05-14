import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule],
})

export class HeroComponent {
  titulo: string = 'No te pierdas ni un solo momento del Juego con el internet de Totalplay';
  publicidad: string = 'Cuando el ultimo partido importa, la conexión también,: cada jugada sin interrupciones';

}