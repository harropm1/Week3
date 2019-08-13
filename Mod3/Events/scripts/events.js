"use strict";

window.onload = function()
{
    const allTextInputFields = document.querySelectorAll("input[type='text']");
    //this is to make the input fields tan
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
    //this is to make the letters in the state capitalize
    stateInputField.oninput = function()
    {
        stateInputField.value = stateInputField.value.toUpperCase();
    };

    const billingStateInputField = document.querySelector("#billingStateInput");
    billingStateInputField.oninput = function()
    {
        billingStateInputField.value = billingStateInputField.value.toUpperCase();
    };

    const sSameAsBDDL = document.querySelector("#sSameAsB");
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
}