import { LightningElement } from 'lwc';

export default class FirstChildComp extends LightningElement {

  msg = 'Hello from Child';
  handleClick(){

    const evt = new CustomEvent('childevent', {detail:this.msg});
    this.dispatchEvent(evt);

  }
}