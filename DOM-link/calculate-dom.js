//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringField = document.querySelector(".billString");
var CalculateIns= calculateBill()
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
   var calc= CalculateIns.calculateCallandSms(billString)
        //round to two decimals

    billTotalElement.innerHTML = calc.toFixed(2);
    
    billTotalElement.classList.remove("warning") ;  
    billTotalElement.classList.remove("danger");    
    billTotalElement.classList.add(CalculateIns.showColor(calc.toFixed(2)));
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);
