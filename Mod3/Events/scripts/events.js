"use strict";

function validatePaymentForm()
{
    let creditCardNumberField = document.querySelector("#creditCardNumber");
    let warningMsgs = document.querySelector("#warningMsgs");
    let expMonthField = document.querySelector("#expMonth");
    let expYearField = document.querySelector("#expYear");
    let securityCodeField = document.querySelector("#securityCode");

    if (creditCardNumberField.validity.patternMismatch)
    {
        warningMsgs.innerHTML = "Please enter a valid credit card number.";
        return false;
    }
    else if (!expMonthField.checkValidity())
    {
        warningMsgs.innerHTML = "Please enter a valid two digit month.";
        return false;
    }
    else if (!expYearField.checkValidity())
    {
        warningMsgs.innerHTML = "Please enter a valid four digit year.";
        return false;
    }
    else if (securityCodeField.validity.patternMismatch)
    {
        warningMsgs.innerHTML = "Please enter a valid security code.";
        return false;
    }
    else
    {
        warningMsgs.innerHTML = "";
    }
}


window.onload = function()
{
    const allTextInputFields = document.querySelectorAll("input[type='text']");
    //this makes the input fields tan
    for (let i = 0; i < allTextInputFields.length; i++)
    {
        allTextInputFields[i].onfocus = function()
        {
            this.style.backgroundColor = "tan";
        };
        allTextInputFields[i].onblur = function()
        {
            this.style.backgroundColor = "";
        };
    }

    const stateInputField = document.getElementById("stateInput");
    //this makes the letters in the state input on the shipping form capitalized
    stateInputField.oninput = function()
    {
        stateInputField.value = stateInputField.value.toUpperCase();
    };

    const billingStateInputField = document.querySelector("#billingStateInput");
    //this makes the letters in the state input on the billing form capitalized
    billingStateInputField.oninput = function()
    {
        billingStateInputField.value = billingStateInputField.value.toUpperCase();
    };

    const sSameAsBDDL = document.querySelector("#sSameAsB");
    //this displays and hides the billing address form
    let billingForm = document.querySelector("#billing");
    sSameAsBDDL.onchange = function()
    {
        if (sSameAsBDDL.value == "Same Address")
        {
            billingForm.style.display = "none";
        }
        else 
        {
            billingForm.style.display = "block";
        }
    }

    const submitBtn = document.querySelector("#submitBtn");
    //this is the button onclick that runs the validator
    submitBtn.onclick = function()
    {
        validatePaymentForm();
    }
}