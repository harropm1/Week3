"use strict";

//these functions work with images and paragraphs

window.onload = function ()
{
    let altText = document.querySelectorAll("img:not([alt])");
    altText.alt = "graffiti image";
    console.log(altText);

    let images = document.querySelectorAll("img");

    let paragraph = "";
    let imageId;
    for (let i = 0; i < images.length; i++)
    {
        imageId = images[i].id;
        paragraph = "#para" + imageId.substr(imageId.length - 1);
        let paragraphText = document.querySelector(paragraph);
        paragraphText.innerHTML = images[i].alt;
    }
}