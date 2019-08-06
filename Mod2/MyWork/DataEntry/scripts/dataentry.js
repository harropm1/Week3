"use strict";

//this function programatically adds borders around specific selected elements

window.onload = function ()
{
    let fields = document.querySelectorAll("input");
    let reset = document.querySelector("form")
    
    const btnAddress = document.querySelector("#getAddress");
    btnAddress.onclick = function()
    {
        let fullAddress = "";
        for (let i = 0; i < fields.length; i++)
        {
            fullAddress += fields[i].value + "\n";
        }
        alert(fullAddress);
        reset.reset();
    }
}