import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//Usuario
  nombre='';
  email='';

//Banderas
nombreLocalStr=false;
mismoEmail = false;

//Color y nombre del boton
btnColor = localStorage.getItem('boton') || '';
btnName = localStorage.getItem('botonName') ||'';

//voto
voto = false;


  constructor() {
  
   }

   
  
  ngOnInit(): void {
    
    

    
    if( localStorage.getItem('boton')){
      this.voto = true;
    }
    if(localStorage.getItem('nombre')){
      this.nombreLocalStr = true;
      this.nombre = localStorage.getItem('nombre') || '';
  
    }
    else{
      false;
    }

  }

  logout(){
    this.nombreLocalStr = false;
    localStorage.removeItem('boton');
    localStorage.removeItem('botonName');
    localStorage.removeItem('nombre');
    localStorage.removeItem('email');
    localStorage.removeItem('voto');
    window.location.reload();
  }


  login(form:NgForm){
    if(form.valid && (localStorage.getItem('email')===this.email)){
      this.mismoEmail = true;
    }
    if(form.valid&& (localStorage.getItem('email')!=this.email)){
      localStorage.setItem('nombre',this.nombre);
      localStorage.setItem('email',this.email);
      this.nombreLocalStr = true;
    }
    else{
    return;
    }
  }


}
