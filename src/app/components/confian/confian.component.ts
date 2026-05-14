import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confian',
  templateUrl: './confian.component.html',
  styleUrls: ['./confian.component.css'],
  standalone: true,
  imports: [CommonModule],
})

export class ConfianComponent {

   testimonio = {
    nombre: 'Angelica',
       texto: `
      Tengo más de 10 años con @totalplaymx y,
      si bien, no es barato durante todos estos años
      ha sido el mejor servicio de todos.
      He tenido 2 fallas en 10 años y el soporte
      siempre fue muy rápido.
    `,
    estrellas: 5
  }

}