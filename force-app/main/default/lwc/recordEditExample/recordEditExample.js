import { LightningElement } from 'lwc';

export default class RecordEditExample extends LightningElement {

  handleSuccess(event){
    console.log('Record is Created ' + event.detail.id);

  }
}