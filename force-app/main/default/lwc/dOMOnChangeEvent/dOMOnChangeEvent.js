import { LightningElement } from 'lwc';

export default class DOMOnChangeEvent extends LightningElement {

  isChecked = false;

  handleCheckBoxChange(event){
    this.isChecked = event.target.checked;
  }
}