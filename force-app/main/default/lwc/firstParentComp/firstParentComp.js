import { LightningElement } from 'lwc';

export default class FirstParentComp extends LightningElement {

  messageFromChild;
  handleMessageFromChild(event){
    this.messageFromChild = event.detail;
  }
}