import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css'],
  standalone: true,
  imports: [CommonModule],
})

export class PlanesComponent {
  planes = [
    {
      megas: 100,
      subtitulo: 'TV + Internet Simétrico',
      price: 390,
      beneficios: 'Totalplay TV',
      pago: 699,
      imagen: 'images/plan.png'
    },
    {
      megas: 200,
      subtitulo: 'TV + Internet Simétrico',
      price: 490,
      beneficios: 'Incluido por 6 meses',
      pago: 699,
      imagen: 'images/plan.png'
    },
    {
      megas: 300,
      subtitulo: 'TV + Internet Simétrico',
      price: 590,
      beneficios: 'WiFi Pro',
      pago: 699,
      imagen: 'images/plan.png'
    }
  ]
}