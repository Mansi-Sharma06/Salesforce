import { LightningElement } from 'lwc';

export default class DOMOnChangeDisplayText extends LightningElement {

  enteredName='';

  handleNameChange(event){
    this.enteredName = event.target.value;
 }
}