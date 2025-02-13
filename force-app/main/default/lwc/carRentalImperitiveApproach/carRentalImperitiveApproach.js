import { LightningElement } from 'lwc';
import getAvailCars from '@salesforce/apex/CarController.getAvailableCars';

export default class CarRentalImperitiveApproach extends LightningElement {

  carList;

  connectedCallback(){
    this.getAvailableCars();
}

    getAvailableCars(){
      getAvailCars().then((result) =>{
            this.carList= result;
        }).catch((error) =>{
            console.log(JSON.stringify(error.body.message));
        })
    }
}


