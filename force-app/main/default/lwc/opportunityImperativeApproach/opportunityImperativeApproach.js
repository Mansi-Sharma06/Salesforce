import { LightningElement } from 'lwc';
import getWonOpportunities from '@salesforce/apex/OpportunityController.getWonOpportunities';
import getLostOpportunities from '@salesforce/apex/OpportunityController.getLostOpportunities';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';
 
export default class OpportunityImperativeApproach extends LightningElement {
    oppList;
    connectedCallback(){
        this.loadAllDeals();
    }
    loadAllDeals(){
        getOpportunities().then((result) =>{
            this.oppList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }
    loadWonDeals(){
        getWonOpportunities().then((result) =>{
            this.oppList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }
    loadLostDeals(){
        getLostOpportunities().then((result) =>{
            this.oppList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }
}
 