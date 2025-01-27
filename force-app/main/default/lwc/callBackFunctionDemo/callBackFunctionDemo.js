import { LightningElement } from 'lwc';

export default class CallBackFunctionDemo extends LightningElement {

  handleClick(){
    this.getData(this.handleData);
  }

  getData(callBack){

    setTimeout(() => {
      const data = 'Data from getData';
      callBack(data);
    }, 2000);
  }

  handleData(data){ // this is callback function

    console.log(data);
  }
}