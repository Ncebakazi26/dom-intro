function BillWithSettings() {
    var thecallCost = 0;
    var thesmsCost = 0;
    var criticalLevel = 0;
    var warningLevel = 0;
   var callCost = 0;
   var smsCost = 0;
    function setCallCost(callCost) {
        thecallCost = callCost
    }
    function getCallCost() {
        return thecallCost;
    }
    function setSmsCost(smsCost) {
        thesmsCost = smsCost
    }
    function getSmsCost(){
        return thesmsCost;
    }
    function setWarning(warning){
        warningLevel = warning;
 }
    function getWarning(){
        return warningLevel;
     }
     function setCritical(critical){
         criticalLevel = critical
     }
     function getCritical(){
         return criticalLevel;
     }
     function makeCall(){
        if(!hasReachedCritical()){
            callCost+= thecallCost;
}
     }
     function getTotalCallCost(){
         return callCost;

     }
     function sendSms(){
        if(!hasReachedCritical()){
         smsCost+= thesmsCost;
     }
    }
     function getTotalSmsCost(){
         return smsCost;
   
     }
     function getTotal(){
    
         return callCost+smsCost;
 }
     function hasReachedCritical(){
         return getTotal()>= getCritical()
     }
     function classColor(){
        if(hasReachedCritical()){
            return "danger";
        }
         if(getTotal()>= getWarning()){
             return "warning";
            }
       

     }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarning,
        getWarning,
        setCritical,
        getCritical,
        getTotalCallCost,
        getTotal,
        getTotalSmsCost,
        makeCall,
        sendSms,
        classColor,

        
    }

}