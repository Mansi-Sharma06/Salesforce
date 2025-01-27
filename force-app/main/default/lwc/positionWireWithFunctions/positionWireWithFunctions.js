import { LightningElement, wire } from 'lwc';
import getPositionWithLocUpper from '@salesforce/apex/PositionController.getPositionsWithLocationUppercase'
 
export default class positionWireWithFunction extends LightningElement {
    posList=[];
    @wire(getPositionWithLocUpper)
    wiredGetPositionWithLocation({data, error}){
        if(data){
            this.posList=[];
            data.forEach(pos => {
                const obj = {
                    ID: pos.ID,
                    Name: pos.Name,
                    Date_Opened__c: pos.Date_opened__c,
                    Date_Closed__c: pos.Date_closed__c,
                    Department__c: pos.Department__c,
                    Location__c: pos.Location__c ? pos.Location__c.toUpperCase() : pos.Location__c
                    //Location__c: pos.Location__c.toUpperCase()
                }
                this.posList.push(obj);
            });
        }
    }
}
 