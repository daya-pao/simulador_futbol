import { Component } from '@angular/core';
import { EquipoAnotarComponent } from '../equipo-anotar/equipo-anotar.component';

@Component({
  selector: 'app-marcador-futbol',
  standalone: true,
  imports: [EquipoAnotarComponent],
  templateUrl: './marcador-futbol.component.html',
  styleUrl: './marcador-futbol.component.css'
})
export class MarcadorFutbolComponent {

}
