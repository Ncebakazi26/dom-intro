var callsTotalElem = document.querySelector(".callTotalOne")
var smsTotalElem = document.querySelector(".smsTotalOne")
var billTypeText = document.querySelector(".billTypeText")
var totalCostElem = document.querySelector(".totalOne")
// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill

var textInst = TextBill()
//add an event listener for when the add button is pressed
function textBillTotal(){
 var billTypeEntered = billTypeText.value.trim();
    // get the value entered in the billType textfield
  textInst.smsAndcalls(billTypeEntered)
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = textInst.getcallTotal().toFixed(2);
    smsTotalElem.innerHTML = textInst.getsmsTotal().toFixed(2);
    console.log(textInst.getsmsTotal().toFixed(2));
    totalCostElem.innerHTML = textInst.getTotal().toFixed(2);
    

        // adding the danger class will make the text red
        totalCostElem.classList.remove("warning");
        totalCostElem.classList.remove("danger");
        totalCostElem.classList.add(textInst.OrangeAndRed());
  
    

}

addToBillBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
