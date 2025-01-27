import { LightningElement } from 'lwc';

export default class ExampleLighteningDataTable extends LightningElement {

  columns = [
    {label:'Id', fieldName:'id'},
    {label:'Name', fieldName:'name'},
    {label:'Age', fieldName:'age'}
  ];

  data = [
    {id:'1', name:'Mansi',age:22},
    {id:'2', name:'Gunmay',age:25},
    {id:'3', name:'Anurag',age:24},
    {id:'4', name:'Deepika',age:21},
  ]

}