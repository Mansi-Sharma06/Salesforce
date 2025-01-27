import { LightningElement, wire } from 'lwc';
import getOpportunitiesWithCommission from '@salesforce/apex/OpportunityController.getOpportunitiesWithCommission'
 
export default class OpportunityWireWithFunction extends LightningElement {
    oppList=[];
    @wire(getOpportunitiesWithCommission)
    wiredGetOpportunityWithCommission({data, error}){
        if(data){
            this.oppList=[];
            data.forEach(opp => {
                const obj = {
                    ID: opp.ID,
                    Name: opp.Name,
                    StageName: opp.StageName,
                    CloseDate: opp.CloseDate,
                    Amount: opp.Amount,
                    Commission: opp.Amount * 0.20
                }
                this.oppList.push(obj);
            });
        }
    }
}
 