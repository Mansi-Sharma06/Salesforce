import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

  msg;
  handleDemo(event){
    this.msg = event.detail;
  }
}