import { Component, ComponentFactoryResolver, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipo-anotar',
  standalone: true,
  imports: [],
  templateUrl: './equipo-anotar.component.html',
  styleUrl: './equipo-anotar.component.css'
})
export class EquipoAnotarComponent {
  
  @Input() btnAnotarHabilitar:boolean = false;
  @Output() comenzarPartidoEven = new EventEmitter<void>();
  comenzarPartidoHabilitado:boolean = false;

  comenzarpartido():void{
    this.comenzarPartidoHabilitado=true;
    this.btnAnotarHabilitar=false;
    alert("Evento 'iniciarPartido' recibido en el componente padre.");
    this.comenzarPartidoEven.emit();
  }
  

}
