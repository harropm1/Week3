"use strict";

window.onload = function()
{
    let checkboxes = document.querySelectorAll("input");

    for (let i = 0; i < checkboxes.length; i++)
    {
        checkboxes[i].onclick = function()
        {
            let selection = this.value;
            let selectedImages = document.querySelectorAll("img[alt$="+ selection +"]")

            for (let j = 0; j < selectedImages.length; j++)
            {
                if (checkboxes[i].checked)
                {
                    selectedImages[j].parentNode.style.display = "block";
                }
                else 
                {
                    selectedImages[j].parentNode.style.display = "none";
                }
            }
        }
    }
}