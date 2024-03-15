import { Component } from '@angular/core';
import { EquipoAnotarComponent } from '../equipo-anotar/equipo-anotar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marcador-futbol',
  standalone: true,
  imports: [FormsModule,EquipoAnotarComponent],
  templateUrl: './marcador-futbol.component.html',
  styleUrl: './marcador-futbol.component.css'
})
export class MarcadorFutbolComponent {

  equipo_1: string = "Junior";
  equipo_2: string = "Nacional";
  tiempoSeleccionado: string = "1:00";
  tiempoPersonalizado: number = 1;
  tiempoRestante: string = "1:00"; //mm:ss ->formato
  temporizador: any;
  comenzarHabilitado: boolean = true;
  btnAnotarHabilitar:boolean = true;

  seleccionarTiempo(event: any): void {
    const valorSeleccionado = event.target.value;
    if (valorSeleccionado === 'personalizado') {
      this.tiempoSeleccionado = this.tiempoPersonalizado + ":00";
    } else {
      this.tiempoSeleccionado = valorSeleccionado + ":00";
    }
    this.comenzarHabilitado = true;
  }


  comenzarPartido(): void {
    alert("El partido comenzará en 3, 2, 1...");
    let tiempoSeleccionadoS = parseInt(this.tiempoSeleccionado.split(":")[0]) * 60; 

    this.temporizador = setInterval(() => {
  
      tiempoSeleccionadoS--;

    
      const minutos = Math.floor(tiempoSeleccionadoS / 60);
      const segundos = tiempoSeleccionadoS % 60;
      this.tiempoRestante = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

      // Verificar si el tiempo se ha agotado
      if (tiempoSeleccionadoS <= 0) {
        clearInterval(this.temporizador);
        alert("¡Tiempo agotado! Fin del partido.");
        this.comenzarHabilitado = true;
        this.btnAnotarHabilitar = false; 
        
      }
    }, 1000);

   
    this.comenzarHabilitado = true;
  }

 
}
