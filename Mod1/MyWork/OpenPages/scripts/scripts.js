"use strict";

//These functions open websites in new pop-up windows

window.onload = function ()
{
    const googleBtn = document.getElementById("googleBtn");
    const hartfordBtn = document.getElementById("hartfordBtn");
    const w3Btn = document.getElementById("w3Btn");
    
    const greetingParagraph = document.getElementById("greeting");


    googleBtn.onclick = function()
    {
        let params = "height=600, width=800";
        window.open("https://www.google.com", "Google", params);
    }

    hartfordBtn.onclick = function()
    {
        let params = "height=600, width=400";
        window.open("https://www.thehartford.com", "The Hartford", params);
    }

    w3Btn.onclick = function()
    {
        let params = "height=600, width=400";
        window.open("https://www.w3schools.com/js", "W3Schools", params);
    }

    console.log(navigator.language)

    if (navigator.language == "es-ES")
    {
        return greetingParagraph.innerHTML = "Hola Mundo";
    }
    else if (navigator.language == "de-DE")
    {
        return greetingParagraph.innerHTML = "Hallo Welt"
    }
    else
    {
        return greetingParagraph.innerHTML = "Hello World";
    }
}