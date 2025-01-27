import { LightningElement } from 'lwc';

export default class DOMButtonClick extends LightningElement {
  isDisabled = false;
  
  handleClick(){
    console.log("Button Clicked");
  }

  showAlert(){
    alert("Alert Shown");
  }

  disableButton(){
   this.isDisabled = true;
   console.log("This button is clicked once");
  }
}