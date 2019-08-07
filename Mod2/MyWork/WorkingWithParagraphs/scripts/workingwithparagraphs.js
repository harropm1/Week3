"use strict";

function changeParaSize(percentChange)
{
    const paras = document.querySelectorAll("p");

    let len = paras.length;
    for (let i = 0; i < len; i++)
    {
        let para = paras[i];
        if (para.style.fontSize == "")
        {
            para.style.fontSize = "1.0em";
        }

        let size = parseFloat(para.style.fontSize);
        size = size * percentChange;
        para.style.fontSize = size + "em";
    }
}


window.onload = function()
{
    const increase = document.querySelector("#larger");
    const decrease = document.querySelector("#smaller");

    
    decrease.onclick = function()
    {
        changeParaSize(.8);     
    }
    increase.onclick = function()
    {
        changeParaSize(1.2);     
    }
}