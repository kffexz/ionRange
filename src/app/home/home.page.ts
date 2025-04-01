import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  valorRange = 0;
  gorjeta = 0;
  conta = 0;
  valorFinal = 0;

  onIonChange(ev:RangeCustomEvent) {
    this.valorRange = parseInt(ev.detail.value.toString());
  }


  calcularContaFinal(){
    this.gorjeta = this.valorRange/100*this.conta;
    this.valorFinal = this.conta + this.gorjeta;
  }
  valorConvertido = 0;
  escolha = '';
  mensagem = '';

  converterDistancia() {

    if(this.escolha == 'km'){
      this.valorConvertido = this.valorRange / 1000;
      this.mensagem = this.valorConvertido + ' Km';
    }
    if(this.escolha == 'mil'){
      this.valorConvertido = this.valorRange / 1609.34
      this.mensagem = this.valorConvertido + ' milhas';
    }
    if(this.escolha == 'pes'){
      this.valorConvertido = this.valorRange * 3.28084
      this.mensagem = this.valorConvertido + ' pés';
    }
  }
  
  class='';
  peso=0;
  altura=0;
  imc=0;
  altura2=0;

  alertButtons = ["OK"];

  classificar(){

    this.altura2 = this.altura*this.altura;
    this.imc = this.peso/this.altura2;
    console.log(this.imc);


    if (this.imc<18.5){
      this.class='Você está abixo do peso.';
    }
    else if(this.imc<=24.9) {
      this.class='Você está com o peso normal.';
    }
    else if(this.imc<=29.9 ){
      this.class='Você está sobrepeso.';
    }
    else if (this.imc>=34.9){
      this.class='Você está com obesidade';
    }
   }
}
