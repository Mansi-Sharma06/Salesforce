import { LightningElement } from 'lwc';

export default class GrandParentComp extends LightningElement {

  msg;
  handleDemo(event){
    this.msg = event.detail;
  }
}