"use strict";

window.onload = function (e)
{
    //this is for the text area
    let messageTextAreaField = document.querySelector("#messageTextArea");
    messageTextAreaField.onkeypress = function (e)
    {
        let key = e.charCode ? e.charCode : e.keyCode;
        if (key >= 48 && key <= 57)
        {
            return false;
        }

        let textEntered = messageTextAreaField.value;
        let counter = (50 - textEntered.length);
        let countRemaining = document.querySelector("#countCharLeft");
        countRemaining.innerHTML = "Characters left: " + counter;
    }

    //this is for the images
    let allImages = document.querySelectorAll("img");
    for (let i = 0; i < allImages.length; i++)
    {
        allImages[i].onmouseover = function ()
        {
            allImages[i].style.width = "20em";
        }
        allImages[i].onmouseout = function()
        {
            allImages[i].style.width = "initial";
        }
    }
}

