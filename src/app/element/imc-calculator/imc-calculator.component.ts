import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css']
})
export class ImcCalculatorComponent {

  weight: string;
  height: string;
  imc: number;
  messageError: string;
  showError: boolean = false;
  level: string;

  calculate() {
    let weight = Number(this.weight);
    let height = Number(this.height);
    this.imc = weight / (height ** 2);
    return this.imc;
  }

  massLevel() {
    if (this.imc >= 39.9) {
      this.level = 'Obesidade grau 3'
      return
    }
    if (this.imc >= 34.9) {
      this.level = 'Obesidade grau 2'
      return;
    }
    if (this.imc >= 29.9) {
      this.level = 'Obesidade grau 1'
      return;
    }
    if (this.imc >= 24.9) {
      this.level = 'Sobrepeso'
      return;
    }
    if (this.imc >= 18.5) {
      this.level = 'Peso normal'
      return;
    }
    if (this.imc < 18.5) {
      this.level = 'Abaixo do peso'
      return;
    }
  }

  validForms() {
    if (!Number(this.weight) || Number(this.weight) === 0) {
      this.showError = true;
      this.messageError = 'peso inválido.'
      return false
    }
    if (!Number(this.height) || Number(this.height) === 0) {
      this.showError = true;
      this.messageError = 'altura inválida'
      return false
    }
    if (Number(this.weight) && Number(this.height)) {
      this.showError = false;
    }

    this.calculate();
    this.massLevel();
    return true
  }

  onSubmit() {
    this.validForms();
  }
}
