import { Component, OnInit } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor() { }

  

  voto = localStorage.getItem('boton')?.valueOf ||'';
  azul = 0;
  celeste = 0;
  rojo = 0;
  blanco = 0;
  verde = 0;
  negro = 0;
  amarillo = 0;
  

  ngOnInit(): void {
    this.azul =localStorage.getItem('CantVotosAzul')?.length ||0;
    this.celeste =localStorage.getItem('CantVotosCeleste')?.length ||0;
    this.rojo =localStorage.getItem('CantVotosRojo')?.length ||0;
    this.blanco =localStorage.getItem('CantVotosBlanco')?.length ||0;
    this.verde =localStorage.getItem('CantVotosVerde')?.length ||0;
    this.negro =localStorage.getItem('CantVotosNegro')?.length ||0;
    this.amarillo =localStorage.getItem('CantVotosAmarillo')?.length ||0;
    
  }


  






}
