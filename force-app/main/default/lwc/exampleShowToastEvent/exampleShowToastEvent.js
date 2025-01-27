import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ExampleShowToastEvent extends LightningElement {

  successToast(){

    const evt = new ShowToastEvent({
      title:'Success',
      message:'This is a success message',
      variant:'Success',

    });

    this.dispatchEvent(evt);
  }
  errorToast(){

    const evt = new ShowToastEvent({
      title:'Error',
      message:'This is a error message',
      variant:'error',

    });

    this.dispatchEvent(evt);

  }
}