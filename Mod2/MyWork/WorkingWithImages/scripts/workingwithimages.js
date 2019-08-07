"use strict";

window.onload = function()
{
    let imageFiles = ["images/puppy1.jpg", "images/puppy2.jpg", "images/puppy3.jpg"];
    let imageDescriptions = ["A cute puppy", "Another cute puppy", "Yet another cute puppy"];

    let imagesFromSite = document.querySelectorAll("img");

    for (let i = 0; i < imagesFromSite.length; i++)
    {
        imagesFromSite[i].src = imageFiles[i];
        imagesFromSite[i].alt = imageDescriptions[i];
        imagesFromSite[i].className = "roundedImage";
    }
}