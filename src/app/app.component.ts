import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarcadorFutbolComponent } from './marcador-futbol/marcador-futbol.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarcadorFutbolComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simulador_futbol';
}
