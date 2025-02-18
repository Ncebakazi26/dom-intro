// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
var callTotalTwo1= document.querySelector(".callTotalTwo")
var smsTotalTwo1 = document.querySelector(".smsTotalTwo")
var TotalTwo1 = document.querySelector(".totalTwo")
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
var callsTotal1 = 0;
var smsTotal1 = 0;
//add an event listener for when the add button is pressed
function BillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }

    // update the correct total
    if (billItemType === "call"){
        callsTotal1 += 2.75
    }
    else if (billItemType=== "sms"){
        smsTotal1 += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwo1.innerHTML = callsTotal1.toFixed(2);
    smsTotalTwo1.innerHTML = smsTotal1.toFixed(2);
    var totalCost1 = callsTotal1 + smsTotal1;
    TotalTwo1.innerHTML = totalCost1.toFixed(2);
    if (totalCost1 < 50){
        TotalTwo1.classList.remove("danger");
    }
    if (totalCost1 < 30){
        TotalTwo1.classList.remove("warning");
    }

     if (totalCost1 >= 50){
        TotalTwo1.classList.add("danger");
    }
    else if (totalCost1 >=30){
        // adding the danger cbillItemTypeRadiolass will make the text red
        TotalTwo1.classList.add("warning");
    }
}

radioBillAddBtn.addEventListener('click',BillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
