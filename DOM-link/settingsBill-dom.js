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
var addBtn = document.querySelector(".billBtn")
// get refences to all the settings fields
var settingsInst = BillWithSettings()
//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings
//totalSettings = 0;
// create a variables that will keep track of all three totals.
//Totals = 0;
callTotals = 0;
smsTotals = 0;
var totals = 0;
//add an event listener for when the 'Update settings' button is pressed
var callTotalSetting = 0;
var smsTotalSet = 0;
var warning = 0;
var critical = 0;
function settingsBill2() {
    if(callCostSet.value && smsCostSet.value){
     settingsInst.setSmsCost(Number(smsCostSet.value))
     settingsInst.setCallCost (Number(callCostSet.value))
     settingsInst.setWarning(warningSet.value);
     settingsInst.setCritical(criticalSet.value);
    addingAndRemoveClass()
    }
}
updateSettingsBtn.addEventListener('click', settingsBill2);
//add an event listener for when the add button is pressed
function settingsBill() {
    // get the value enter
    var checkedRadioBtn2 = document.querySelector("input[name='billItemTypeWithSettings']:checked");
     var billItemTypeSet = checkedRadioBtn2.value;
    settingsInst.callAndsmsSetting(billItemTypeSet);
        
    
    //update the totals that is displayed on the screen.
    callTotalSettingsElem.innerHTML = settingsInst.getTotalCallCost().toFixed(2);
    smsTotalSettingsElem.innerHTML = settingsInst.getTotalSmsCost().toFixed(2);
    totalSettingsElem.innerHTML = settingsInst.getTotal().toFixed(2);
    addingAndRemoveClass()
}
function addingAndRemoveClass() {
    
        totalSettingsElem.classList.remove("danger")
        totalSettingsElem.classList.remove("warning")
        totalSettingsElem.classList.add(settingsInst.classColor())


}

addBtn.addEventListener('click', settingsBill);

    // update the correct total

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
