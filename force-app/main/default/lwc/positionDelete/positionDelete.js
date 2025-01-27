import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getPositions from '@salesforce/apex/PositionController.getPositions';
import deletePos from '@salesforce/apex/PositionController.deletePos';

const columns =[
  {label:'Name',fieldName:'Name'},
  {label:'Date Open',fieldName:'Date_opened__c'},
  {label:'Date Close',fieldName:'Date_closed__c'},
  {label:'Location',fieldName:'Location__c'},
  {label:'Department',fieldName:'Department__c'}];

export default class PositionDelete extends LightningElement {

    @wire(getPositions) posList;
    posColumns = columns;
    posId;
    handleRowSelection(event)
    {
        const selectedRows = event.detail.selectedRows;
        if(selectedRows.length>0)
        this.posId = selectedRows[0].Id;
    alert(this.posId);
    }
    handleClick()
    {
        deletePos({recordId: this.posId})
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Position deleted successfully',
                    variant: 'success'
                })
            );
        }).catch(error=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Error Deleting Position',
                    variant: 'error'
                })
            );
        }) 
  }
}
