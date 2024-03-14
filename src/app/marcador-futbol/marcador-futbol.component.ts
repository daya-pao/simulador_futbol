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

  equipo1:String = "equipo_1";
  equipo2:String = "equipo_1";
  tiempo:String = "1:00";
  tiempoPersonalizado:boolean = false;
  tiempoSeleccionado: number = 1;
  tiempoRestante:number = 0;
  temporizador:any;
  comenzarHabilitado:boolean = false;

  
}
