import { LightningElement } from 'lwc';

export default class ArrowFunctionWithThisKeyword extends LightningElement {

  todaysDateTime = new Date();

  updateDataTimeUsingCallback(){

    setInterval(function(){
      this.todaysDateTime = new Date();
      console.log(this.todaysDateTime);
    }, 1000);

  }

  updateDataTimeUsingVariable(){
    
    let a = this;
    setInterval(function(){
      a.todaysDateTime = new Date();
      console.log(a.todaysDateTime);
    }, 1000);

  }

  updateDataTimeUsingBindFunction(){
    
    setInterval(function(){
       this.todaysDateTime= new Date();
      console.log(this.todaysDateTime);
    }.bind(this),1000);
   
  }

  updateDataTimeUsingArrowFunction(){
    
    setInterval(() => {
      this.todaysDateTime = new Date();
      console.log(this.todaysDateTime);
    }, 1000);
  }
}