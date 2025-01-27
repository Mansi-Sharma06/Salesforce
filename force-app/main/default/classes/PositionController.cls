public with sharing class PositionController {

    @AuraEnabled(cacheable=true)
    public static List<Position__c> getPositions(){

        return [SELECT Name, Date_opened__c, Date_closed__c, Department__c, Location__c, Status__c FROM Position__c WITH SECURITY_ENFORCED];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Position__c> getPositionsWithLocationUppercase(){

        return [SELECT Name, Date_opened__c, Date_closed__c, Department__c, Location__c FROM Position__c WHERE Status__C = 'Open' WITH SECURITY_ENFORCED];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Position__c> getPositionsWithNewPosition(){

        return [SELECT Name, Date_opened__c, Date_closed__c, Department__c, Location__c, Status__c FROM Position__c WHERE Status__C = 'New' WITH SECURITY_ENFORCED];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Position__c> getPositionsOpenPosition(){

        return [SELECT Name, Date_opened__c, Date_closed__c, Department__c, Location__c, Status__c FROM Position__c WHERE Status__C = 'Open' WITH SECURITY_ENFORCED];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Position__c> getPositionsClosePosition(){

        return [SELECT Name, Date_opened__c, Date_closed__c, Department__c, Location__c, Status__c FROM Position__c WHERE Status__C = 'Close' WITH SECURITY_ENFORCED];
    } 

    @AuraEnabled
public static void deletePos(string recordId)
{
        try{
            position__C pos = [select id from position__c where id=:recordId WITH SECURITY_ENFORCED];
            delete pos;
        }
        catch(Exception e)
        {
            throw new AuraHandledException(e.getMessage());
        }
}
    
}