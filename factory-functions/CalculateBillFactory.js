
function calculateBill(){
    var billTotal = 0;
function calculateCallandSms(stringPassed){
    var billString = stringPassed.split(",");
    var billTotal1=0;
    for (var i=0;i<billString.length;i++){
        var billItem = billString[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
            billTotal1+=2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
            billTotal1+=0.75;
        }
       
    }
    return billTotal1;
}
    function getTotalcalcalculated(){
        return billTotal;
    }
    function showColor(color){
        if(color>=20 && color< 30){
            return "warning";
        }
        if(color>=30){
            return "danger";
        }

    }
return{
    calculateCallandSms,
    getTotalcalcalculated,
    showColor,
}
}