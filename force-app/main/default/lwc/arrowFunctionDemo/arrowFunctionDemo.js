import { LightningElement } from 'lwc';

export default class ArrowFunctionDemo extends LightningElement {

  handleClick(){
    this.getData((data) => {
      console.log('Received Data' + data);
    })
  }

  getData(callBack){

    setTimeout(() => {
      const data = 'Test Data';
      callBack(data);
    }, 2000);
  }
}