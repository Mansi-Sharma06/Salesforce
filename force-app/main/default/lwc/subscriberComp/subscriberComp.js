import { LightningElement, wire } from 'lwc';
import { MessageContext, subscribe } from 'lightning/messageService'; 
import DEMO_CHANNEL from '@salesforce/messageChannel/DemoChannel__c';

export default class SubscriberComp extends LightningElement {
  receivedMessage;

  @wire(MessageContext)
  messageContext;

  connectedCallback(){
    this.subscriberToMessageChannel();
  }

  subscriberToMessageChannel(){
    if(!this.subscription){
      this.subscription = subscribe(this.messageContext, DEMO_CHANNEL, (message) => 
      this.receivedMessage = message);
    }
  }
}