import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  _second=1000;
  segundosMax = 60;
  segundosMin = 0;
  botonClr='btn btn-primary'
  botonName='primary'
  voto=false;
  nroRandom=Math.floor((Math.random() * 60) + 1);
  votosAzul:string =localStorage.getItem('CantVotosAzul') ||'';
  votosRojo:string =localStorage.getItem('CantVotosRojo') ||'';
  votosCeleste:string =localStorage.getItem('CantVotosCeleste') ||'';
  votosAmarillo:string =localStorage.getItem('CantVotosAmarillo') ||'';
  votosVerde:string =localStorage.getItem('CantVotosVerde') ||'';
  votosNegro:string =localStorage.getItem('CantVotosNegro') ||'';
  votosBlanco:string =localStorage.getItem('CantVotosBlanco') ||'';


  constructor(private home: HomeComponent){}

  
  ngOnInit(){
    const a = interval(1000).subscribe((n)=>{
      this.segundosMax = this.segundosMax - 1;
      this.resetRandom();
      if (this.segundosMax <=60 && this.segundosMax >=52){
        this.botonClr='btn btn-primary';
        this.botonName='Azul';
      }
      if (this.segundosMax <=51 && this.segundosMax >=42){
        this.botonClr='btn btn-danger';
        this.botonName='Rojo';
      }
      if (this.segundosMax <=41 && this.segundosMax >=32){
        this.botonClr='btn btn-success';
        this.botonName='Verde';
      }
      if (this.segundosMax <=31 && this.segundosMax >=22){
        this.botonClr='btn btn-info';
        this.botonName='Celeste';
      }
      if (this.segundosMax <=21 && this.segundosMax >=12){
        this.botonClr='btn btn-warning';
        this.botonName='Amarillo';
      }
      if (this.segundosMax <=11 && this.segundosMax >=0){
        this.botonClr='btn btn-dark';
        this.botonName='Negro';
      }
       if(this.segundosMax ==-1){

        if(localStorage.getItem('votos')?.length==1){
          this.botonClr='btn btn-light';
          this.botonName='Blanco';
          this.segundosMax = 60;
          localStorage.setItem('votos','..');
          localStorage.setItem('boton',this.botonClr);
          localStorage.setItem('botonName',this.botonName);
          this.segundosMax =60;
          window.location.reload();
        }
        else{
          this.segundosMax =60;
        }
       }
    });
  }


  reset(){
    if(localStorage.getItem('email') && !localStorage.getItem('voto')){
      this.segundosMax = 60;
      localStorage.setItem('voto','si');
      localStorage.setItem('boton',this.botonClr);
      localStorage.setItem('botonName',this.botonName);
      
      if (this.botonName =='Azul'){
        this.votosAzul =this.votosAzul+'.';
        localStorage.setItem('CantVotosAzul',this.votosAzul);
      }
      if (this.botonName =='Celeste'){
        this.votosCeleste =this.votosCeleste+'.';
        localStorage.setItem('CantVotosCeleste',this.votosCeleste);
      }
      if (this.botonName =='Amarillo'){
        this.votosAmarillo =this.votosAmarillo+'.';
        localStorage.setItem('CantVotosAmarillo',this.votosAmarillo);
      }
      if (this.botonName =='Verde'){
        this.votosVerde =this.votosVerde+'.';
        localStorage.setItem('CantVotosVerde',this.votosVerde);
      }
      if (this.botonName =='Negro'){
        this.votosNegro =this.votosNegro+'.';
        localStorage.setItem('CantVotosNegro',this.votosNegro);
      }
      if (this.botonName =='Blanco'){
        this.votosBlanco =this.votosBlanco+'.';
        localStorage.setItem('CantVotosBlanco',this.votosBlanco);
      }
      if (this.botonName =='Rojo'){
        this.votosRojo =this.votosRojo+'.';
        localStorage.setItem('CantVotosRojo',this.votosRojo);
      }
      window.location.reload();
      
      
    }
    else{
      Swal.fire({
        title:'Error',
        icon:'error',
        text:'Usted ya votó o no se logueó'
      });
    }

  }


  resetRandom(){
    console.log(this.nroRandom);
    if(this.nroRandom == this.segundosMax){
    this.segundosMax = 60;
      localStorage.setItem('botonRandom',this.botonClr);
      localStorage.setItem('botonNameRandom',this.botonName);
      if (this.botonName =='Azul'){
        this.votosAzul =this.votosAzul+'.';
        localStorage.setItem('CantVotosAzul',this.votosAzul);
      }
      if (this.botonName =='Celeste'){
        this.votosCeleste =this.votosCeleste+'.';
        localStorage.setItem('CantVotosCeleste',this.votosCeleste);
      }
      if (this.botonName =='Amarillo'){
        this.votosAmarillo =this.votosAmarillo+'.';
        localStorage.setItem('CantVotosAmarillo',this.votosAmarillo);
      }
      if (this.botonName =='Verde'){
        this.votosVerde =this.votosVerde+'.';
        localStorage.setItem('CantVotosVerde',this.votosVerde);
      }
      if (this.botonName =='Negro'){
        this.votosNegro =this.votosNegro+'.';
        localStorage.setItem('CantVotosNegro',this.votosNegro);
      }
      if (this.botonName =='Blanco'){
        this.votosBlanco =this.votosBlanco+'.';
        localStorage.setItem('CantVotosBlanco',this.votosBlanco);
      }
      if (this.botonName =='Rojo'){
        this.votosRojo =this.votosRojo+'.';
        localStorage.setItem('CantVotosRojo',this.votosRojo);
      }
      window.location.reload();
    }
  }

  




}