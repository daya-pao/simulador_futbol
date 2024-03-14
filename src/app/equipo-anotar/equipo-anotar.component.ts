import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-equipo-anotar',
  standalone: true,
  imports: [],
  templateUrl: './equipo-anotar.component.html',
  styleUrl: './equipo-anotar.component.css'
})
export class EquipoAnotarComponent {
  @Output() iniciarPartido = new EventEmitter<void>();

  botonHabilitado: boolean = true;
  comenzarPartido(): void {
    this.botonHabilitado = false;
    alert("Evento 'iniciarPartido' recibido en el componente padre.");
    this.iniciarPartido.emit();
  }


}
