import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipo-anotar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo-anotar.component.html',
  styleUrl: './equipo-anotar.component.css'
})
export class EquipoAnotarComponent {


  contadorAnotar_1 :number = 0 ;
  contadorAnotar_2 :number = 0 ;
  /* estadoPartido_1: String = "Empate" */
  

  @Output() comenzarPartidoEven = new EventEmitter<void>();
  @Input() comenzarPartidoHabilitado: boolean = true
  @Output()GolAnotado = new EventEmitter<String>()
  @Input() estadoPartido_1:String = 'EMPATE'
  @Input() estadoPartido_2:String = 'EMPATE'

  



  comenzarpartido(){
    this.comenzarPartidoHabilitado=false;
    alert("Evento 'iniciarPartido' recibido en el componente padre.");
    this.comenzarPartidoEven.emit();
  }

  Equipo_1_GolAnotado(){
    this.GolAnotado.emit('equipo_1')
  
  } 
  Equipo_2_GolAnotado(){
    this.GolAnotado.emit('equipo_2')
    
  }

}


/* 
  marcadorGol(equipo:String){


    this.golAnotado.emit(equipo)
  }


  GolAnotado_Equipo_1(){
    this.contadorAnotar_1++;
    this.golAnotado.emit('equipo_1')
    console.log(this.contadorAnotar_1)
    this.ActualizarMensaje()
  }
  GolAnotado_Equipo_2(){
    this.contadorAnotar_2++;
    this.golAnotado.emit('equipo_2')
    this.ActualizarMensaje()
  }

  ActualizarMensaje(){
    if(this.contadorAnotar_1 === this.contadorAnotar_2){
      this.estadoPartido = "Empate";
    }else if(this.contadorAnotar_1 > this.contadorAnotar_2 ){
      this.estadoPartido = "Van Ganado";
    }else{
      this.estadoPartido = "Van Perdiendo";
    }
  } */

