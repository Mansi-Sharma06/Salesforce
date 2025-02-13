public with sharing class SportsAcademyController {
    @AuraEnabled(cacheable=true)
    public static List<Sports_Program_Object__c> getSportsProgram(){

        return [SELECT Id, Name FROM Sports_Program_Object__c];
        
    }

    @AuraEnabled
    public static void deleteSportsProgram(Id recordId){

        delete [SELECT Id FROM Sports_Program_Object__c where Id= :recordId];
        
    }
}