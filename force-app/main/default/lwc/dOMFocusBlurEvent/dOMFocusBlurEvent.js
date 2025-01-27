import { LightningElement } from 'lwc';

export default class DOMFocusBlurEvent extends LightningElement {

  handleFocus(){

    console.log("Focus Event");
  }

  handleBlur(){
    console.log("Blur Event");
  }
}