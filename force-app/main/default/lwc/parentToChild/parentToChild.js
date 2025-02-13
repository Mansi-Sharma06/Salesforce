import { LightningElement, api } from 'lwc';

export default class ParentToChild extends LightningElement {
  @api msg;
  // @api is making this property public 
}