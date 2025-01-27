import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {

  firstNumber;
  secondNumber;
  result;

  handleFirstNumber(event){
    this.firstNumber = event.target.value;
  }

  handleSecondNumber(event){
    this.secondNumber = event.target.value;
  }

  add(){
      this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

  sub(){
    this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
  }
  

  mul(){
    this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
  }
  

  div(){
    this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
  }
}