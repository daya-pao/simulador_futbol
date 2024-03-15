import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipo-anotar',
  standalone: true,
  imports: [],
  templateUrl: './equipo-anotar.component.html',
  styleUrl: './equipo-anotar.component.css'
})
export class EquipoAnotarComponent {

  btnAnotar_1:number = 0 ;
  btnAnotar_2:number= 0;

  
 /*  @Input() btnAnotarHabilitar:boolean = false; */
  @Output() comenzarPartidoEven = new EventEmitter<void>();
  @Input() comenzarPartidoHabilitado: boolean = true
  //  comenzarPartidoHabilitado:boolean = true;

  comenzarpartido(){
    this.comenzarPartidoHabilitado=false;
    alert("Evento 'iniciarPartido' recibido en el componente padre.");
    this.comenzarPartidoEven.emit();
  }
  

}
