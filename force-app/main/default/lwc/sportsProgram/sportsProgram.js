import { LightningElement, track, wire } from 'lwc';
import getSportsProgram from '@salesforce/apex/SportsAcademyController.getSportsProgram';
import deleteSportsProgram from '@salesforce/apex/SportsAcademyController.deleteSportsProgram';
import { refreshApex } from '@salesforce/apex';

export default class SportsProgram extends LightningElement {

  @track programs;
  selectedProgramId;

  @wire(getSportsProgram)

  wiredPrograms({error, data}){
    if(data){
      this.programs = data;
    }
    else if(error){
      console.error(error);
    }
  }

  handleSelect(event){
    this.selectedProgramId = event.target.dataset.id;
  }

  handleDelete(){
    if(this.selectedProgramId){
      deleteSportsProgram({recordId : this.selectedProgramId})
      .then(() => refreshApex(this.programs))
      .catch(error => console.error(error));
    }
  }
}