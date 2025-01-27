public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities() {
        return [SELECT Name,StageName,Type,CloseDate FROM Opportunity WITH SECURITY_ENFORCED];
}

@AuraEnabled(cacheable=true)
public static List<Opportunity> getOpportunitiesWithCommission() {
    return [SELECT Name,StageName,CloseDate, Amount FROM Opportunity WITH SECURITY_ENFORCED];
}

@AuraEnabled(cacheable=true)
public static List<Opportunity> getWonOpportunities() {
    return [SELECT Name,StageName,CloseDate, Amount FROM Opportunity WHERE StageName='Closed Won' WITH SECURITY_ENFORCED];
}

@AuraEnabled(cacheable=true)
public static List<Opportunity> getLostOpportunities() {
    return [SELECT Name,StageName,CloseDate, Amount FROM Opportunity WHERE StageName='Closed Lost' WITH SECURITY_ENFORCED];
}
@AuraEnabled
public static void deleteOpp(string recordId)
{
        try{
            opportunity opp =[select id from opportunity where id=:recordId WITH SECURITY_ENFORCED];
            delete opp;
        }
        catch(Exception e)
        {
            throw new AuraHandledException(e.getMessage());
        }
}
}