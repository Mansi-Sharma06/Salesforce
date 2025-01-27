import { LightningElement, wire } from 'lwc';
import getPos from '@salesforce/apex/PositionController.getPositions';

export default class PositionWithWireProperty extends LightningElement {

  @wire(getPos) posList;
}


