import { LightningElement, wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';
import deleteOpp from '@salesforce/apex/OpportunityController.deleteOpp';

const columns =[
    {label:'Name',fieldName:'Name'},
    {label:'Stage',fieldName:'StageName'},
    {label:'Probability',fieldName:'Probability'},
    {label:'Close Date',fieldName:'CloseDate'},
    {label:'Amount',fieldName:'Amount'}];
export default class OpportunityDelete extends LightningElement {

    @wire(getOpportunities) oppList;
    oppColumns = columns;
    oppId;
    handleRowSelection(event)
    {
        const selectedRows = event.detail.selectedRows;
        if(selectedRows.length>0)
        this.oppId = selectedRows[0].Id;
    alert(this.oppId);
    }
    handleClick()
    {
        deleteOpp({recordId: this.oppId})
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Opportunity deleted successfully',
                    variant: 'success'
                })
            );
        }).catch(error=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Error Deleting Opportunity',
                    variant: 'error'
                })
            );
        })
    
      
       
}}