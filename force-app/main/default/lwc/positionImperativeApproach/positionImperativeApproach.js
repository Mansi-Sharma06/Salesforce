import { LightningElement } from 'lwc';
import getNewPositions from '@salesforce/apex/PositionController.getPositionsWithNewPosition';
import getOpenPositions from '@salesforce/apex/PositionController.getPositionsOpenPosition';
import getClosePositions from '@salesforce/apex/PositionController.getPositionsClosePosition';
import getAllPositions from '@salesforce/apex/PositionController.getPositions';
 
export default class PositionImperativeApproach extends LightningElement {
    posList;

    connectedCallback(){
        this.loadAllPositions();
    }
    loadAllPositions(){
      getAllPositions().then((result) =>{
            this.posList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }
    loadNewPositions(){
      getNewPositions().then((result) =>{
            this.posList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }

    loadOpenPositions(){
      getOpenPositions().then((result) =>{
            this.posList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }

    loadClosePositions(){
      getClosePositions().then((result) =>{
            this.posList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }
}
 