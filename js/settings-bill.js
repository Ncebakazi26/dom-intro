// get a reference to the sms or call radio buttons
var callTotalSettingsElem = document.querySelector(".callTotalSettings")
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings")
var billItemTypeElem = document.querySelector(".billItemTypeWithSettingsRd")
var totalSettingsElem = document.querySelector(".totalSettings")
var updateSettingsBtn = document.querySelector(".updateSettings")
var callCostSet = document.querySelector(".callCostSetting")
var smsCostSet = document.querySelector(".smsCostSetting")
var warningSet = document.querySelector(".warningLevelSetting")
var criticalSet = document.querySelector(".criticalLevelSetting")
// get refences to all the settings fields

//get a reference to the add button
var addBtn = document.querySelector(".billBtn")
//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings
//totalSettings = 0;
// create a variables that will keep track of all three totals.
//Totals = 0;
callTotals = 0;
smsTotals = 0;
//add an event listener for when the 'Update settings' button is pressed
var callTotalSetting = 0;
var smsTotalSet = 0;
var warning = 0;
var critical = 0;
function settingsBill2() {
    callTotalSetting = Number(callCostSet.value);
    smsTotalSet = Number(smsCostSet.value);
    warning = warningSet.value;
    critical = criticalSet.value;
    if(addBtn.disabled){
     addBtn.disabled=false;    
    }
    
}
updateSettingsBtn.addEventListener('click', settingsBill2);

//add an event listener for when the add button is pressed

function settingsBill() {
    // get the value entered in the billType textfield
    var checkedRadioBtn2 = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn2) {
        var billItemTypeSet = checkedRadioBtn2.value
    }
    // update the correct total
    if (billItemTypeSet === "call") {
        callTotals += callTotalSetting;
    }
    if (billItemTypeSet === "sms") {
        smsTotals += smsTotalSet;
    }
    //update the totals that is displayed on the screen.
    callTotalSettingsElem.innerHTML = callTotals.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotals.toFixed(2);
    var Totals = callTotals + smsTotals;
    totalSettingsElem.innerHTML = Totals.toFixed(2);
    if (Totals >= critical) { 
        totalSettingsElem.classList.add("danger")
        addBtn.disabled=true; 
        totalSettingsElem.classList.remove("warning")

    }
    else if (Totals >= warning) {
        totalSettingsElem.classList.add("warning")
        totalSettingsElem.classList.remove("danger")
    }
}
addBtn.addEventListener('click', settingsBill);


    // update the correct total

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
