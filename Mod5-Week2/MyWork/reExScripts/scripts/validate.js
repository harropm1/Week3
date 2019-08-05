"use strict"

//this function checks to see if a Canadian postal code is formatted properly


window.onload = function()
{
    let postalCodeField = document.getElementById("postalCode");
    let isAPostalCodeField = document.getElementById("isAPostalCode");

    const btnConfirm = document.getElementById("confirm");
    btnConfirm.onclick = function()
    {
        let zipcodeOutput = validateZipCode(postalCodeField.value);

        isAPostalCodeField.innerHTML = zipcodeOutput;
    }
    
}

function validateZipCode(zipcode)
{
    let zipcodePattern = /^([A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/;

    if (zipcodePattern.test(zipcode))
    {
        return zipcode + " is a valid Canadian postal code pattern.";
    }
    else
    {
        return zipcode + " is not a valid Canadian postal code pattern.";
    }
}