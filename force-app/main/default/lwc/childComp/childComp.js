import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {

  handleClick(){
    const evt = new CustomEvent('demo',{bubbles:true,composed:true,detail: 'Hello'});
    this.dispatchEvent(evt);
  }
}