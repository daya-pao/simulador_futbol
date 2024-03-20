import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipoAnotarComponent } from '../equipo-anotar/equipo-anotar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marcador-futbol',
  standalone: true,
  imports: [FormsModule,EquipoAnotarComponent,CommonModule],
  templateUrl: './marcador-futbol.component.html',
  styleUrl: './marcador-futbol.component.css'
})
export class MarcadorFutbolComponent {

  tiempoSeleccionado: string = "1:00";
  tiempoPersonalizado: number = 1;
  tiempoRestante: string = "1:00";
  temporizador: any;
  comenzarHabilitado: boolean = true;
  ContadorHabilitar: boolean = false;
  contador:number = 0;
  mensaje:String = "";

  contador_Equipo_1 :number = 0 ;
  contador_Equipo_2 :number = 0 ;
  estadoEquipo_1: string = "Empate";
  estadoEquipo_2: string = "Empate";

  seleccionarTiempo(event: any): void {
    
    const valorSeleccionado = event.target.value;
    if (valorSeleccionado === 'personalizado') {
      this.tiempoSeleccionado = this.tiempoPersonalizado + ":00";
    } else {
      this.tiempoSeleccionado = valorSeleccionado + ":00";
    }
     /* this.comenzarHabilitado = false; */
  }


  comenzarContador(){
    this.mensaje = "El partido comezara en:"
    this.contador = 3;

    const contadorTemporizador = setInterval(()=>{
      this.contador --;
      if(this.contador === 0){
        clearInterval(contadorTemporizador);
        this.comenzarPartido()
      }
    },1000);
  }

  

  comenzarPartido(): void {
    this.comenzarContador()
    this.ContadorHabilitar = true;
    let tiempoSeleccionadoS = parseInt(this.tiempoSeleccionado.split(":")[0]) * 60; 

    this.temporizador = setInterval(() => {
  
      tiempoSeleccionadoS--;

      const minutos = Math.floor(tiempoSeleccionadoS / 60);
      const segundos = tiempoSeleccionadoS % 60;
      this.tiempoRestante = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

      if (tiempoSeleccionadoS <= 0) {
        clearInterval(this.temporizador);
        this.comenzarHabilitado = false;
        this.mensaje = "¡Tiempo agotado! Fin del partido";
        
        setTimeout(()=>{this.mensaje= " " ;},5000);
      }else if(tiempoSeleccionadoS === 5){
        this.mensaje = "El partido se acabara en 5 segundos"
      }
    }, 1000);
  }

 

  marcadorGolAnotado(equipo : String){
    if(equipo === 'equipo_1'){
      this.contador_Equipo_1++;
      this.actualizarMensaje();
    }else{
      this.contador_Equipo_2++;
      this.actualizarMensaje();

    }
  }

  actualizarMensaje(){
    if (this.contador_Equipo_1 === this.contador_Equipo_2) {
      this.estadoEquipo_1 = 'Empate';
      this.estadoEquipo_2 = 'Empate';
    }else if(this.contador_Equipo_1 > this.contador_Equipo_2){
      this.estadoEquipo_1 = "van ganando"
      this.estadoEquipo_2 = "van perdiendo"
    }else if(this.contador_Equipo_1 < this.contador_Equipo_2){
      this.estadoEquipo_1 = "van perdiendo"
      this.estadoEquipo_2 = "van ganando"
    }
    
  }
  
}

