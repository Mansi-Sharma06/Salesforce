import { LightningElement, wire } from 'lwc';
import getOpp from '@salesforce/apex/OpportunityController.getOpportunities';
export default class OpportunityWithWireProperty extends LightningElement {

    @wire(getOpp) oppList;
}

