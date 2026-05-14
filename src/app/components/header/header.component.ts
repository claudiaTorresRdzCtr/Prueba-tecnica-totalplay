import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule],
})

export class HeaderComponent { 

  textoDesk: string = 'El internet más premiado de México';
  textoMovil: string = 'Descarga la App Totalplay y contrata ahora'

}