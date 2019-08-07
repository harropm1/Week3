//1 - Megan at Red Rocks Canyon
//2 - Megan at Balancing Rock
//3 - Megan at Zion
//4 - Megan at Rocky Mountain
//5 - Megan at Grand Canyon
//6 - Megan at South Rim
//7 - Megan at Delicate Arch
//8 - Megan at the car


"use strict";

    //put arrays here

    //go through for loop for image descriptions if the activity matches

let imageFiles = ["images/megan1.jpg", "images/megan2.jpg", "images/megan3.jpg", "images/megan4.jpg", "images/megan5.jpg", "images/megan6.jpg", "images/megan7.jpg", "images/megan8.jpg"];

let imageDescriptions = ["Megan at Red Rocks Canyon", "Megan at Balancing Rock", "Megan at Zion", "Megan at Rocky Mountain", "Megan at Grand Canyon", "Megan at South Rim", "Megan at Delicate Arch", "Megan at the car"];

window.onload = function()
{
    let addImagesBtn = document.querySelector("#addPic");
    let clearImagesBtn = document.querySelector("#clearPics");

    let parentDiv = document.getElementById("imageSelect");
    let imageDisplay = document.getElementById("locationDiv");

    for (let i = 0; i < imageDescriptions.length; i++)
    {
        let optionDescription = document.createElement("option");

        optionDescription.text = imageDescriptions[i];
        optionDescription.value = imageDescriptions[i];
        parentDiv.appendChild(optionDescription);
    }

    addImagesBtn.onclick = function()
    {
        let image = document.getElementById("imageSelect").selectedIndex;

        if (image == 0)
        {
            return;
        }

        let chosenImage = image - 1;
        

        let addPicture = document.createElement("img");
        addPicture.src = imageFiles[chosenImage];
        addPicture.alt = imageDescriptions[chosenImage];

        imageDisplay.appendChild(addPicture);
    }

    clearImagesBtn.onclick = function()
    {
        imageDisplay.innerHTML = "";
    }
}