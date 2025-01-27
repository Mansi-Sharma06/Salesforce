import { LightningElement } from 'lwc';

export default class DOMComboBoxEvent extends LightningElement {

  selectedOption = '';

  options = [
    {label : 'Option1', value: 'Delhi'},
    {label : 'Option2', value: 'Mumbai'},
    {label : 'Option3', value: 'Pune'},
    {label : 'Option4', value: 'Kolkata'}
    
  ]
  handleChange(event){
    this.selectedOption = event.target.value;
  }
}