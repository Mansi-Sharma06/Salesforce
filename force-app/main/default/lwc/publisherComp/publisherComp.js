import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import DEMO_CHANNEL from '@salesforce/messageChannel/DemoChannel__c';

export default class PublisherComp extends LightningElement {
  message;
  @wire(MessageContext)
  messageContext;

  handleChange(event){
    this.message=event.target.value;
  }

  publishMessage(){
    const messagePayLoad = {message:this.msg};
    publish(this.messageContext,DEMO_CHANNEL,messagePayLoad);

  }


}