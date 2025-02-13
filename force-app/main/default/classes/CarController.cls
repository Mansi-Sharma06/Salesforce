public with sharing class CarController {

    @AuraEnabled(cacheable=true)
    public static List<Car__c> getAvailableCars(){
        return [select Id, Car_Name__c, Category__c, Model__c, Rental_Cost__c, Car_Availability__c from Car__c where Car_Availability__c = 'Available'];
    } 
}