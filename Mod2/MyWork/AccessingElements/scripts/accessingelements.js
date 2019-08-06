"use strict";

//this function programatically adds borders around specific selected elements

window.onload = function ()
{
    let allPs = document.getElementsByTagName("p");
    let length = allPs.length;
    for (let i = 0; i < length; i++)
    {
        allPs[i].style.border = "3px double blue";
    }
    
    let images = document.getElementsByClassName("imageGroup");
    let imageLength = images.length;
    for (let i = 0; i < imageLength; i++)
    {
        images[i].style.border = "8px solid red";
    }
}