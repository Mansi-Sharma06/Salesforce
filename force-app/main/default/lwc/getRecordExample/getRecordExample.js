import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = ['Account.Name',
  'Account.AnnualRevenue',
  'Account.Type',
  'Account.Industry',
];

export default class GetRecordExample extends LightningElement {
  @api recordId;
  account;

  @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
  wiredRecord({error, data}){
    if(data){
      this.account = data.fields;
    }
    else if(error){
      console.error(error);
    }
  }
}