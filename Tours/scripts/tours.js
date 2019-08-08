"use strict";
function createTableByCategory(list, selection)
{
    let tbody = document.getElementById("tableBody");
    
    while(tbody.childNodes.length)
    {
        tbody.removeChild(tbody.childNodes[0]);
    }
    for (let i = 0; i < list.length; i++)
    {
        if (selection.value == list[i].category)
        {
            let row = tbody.insertRow(tbody.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = list[i].title;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = "$" + list[i].price;
        }
    }
}

function createTableByPrice(list, selection)
{
    let tbody = document.getElementById("tableBody");

    for (let i = 0; i <list.length; i++)
    {
        if (selection.value == "$0 - $49" && list[i].price < 49.00)
        {
            let row = tbody.insertRow(tbody.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = list[i].title;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = "$" + list[i].price;
        }
        else if (selection.value == "$50 - $99" && list[i].price < 99.00)
        {
            let row = tbody.insertRow(tbody.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = list[i].title;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = "$" + list[i].price;
        }
        else if (selection.value == "$100 - $500" && list[i].price < 500.00)
        {
            let row = tbody.insertRow(tbody.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = list[i].title;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = "$" + list[i].price;
        }
        else
        {
            let row = tbody.insertRow(tbody.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = list[i].title;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = "$" + list[i].price;
        }
    }
}


window.onload = function()
{
    let toursArray = [
        { category: "Museum Tours", title: "A Touch Tour at the Smithsonian Air And Space Museum", price: 45.00 },
        { category: "Museum Tours", title: "A Tour of TV Sets at the American History Museum", price: 15.00 },
        { category: "Museum Tours", title: "Dinosaurs are Alive at the Natural History Museum", price: 65.00 },
        { category: "Food Tours", title: "Squeezing Things at the Farmers Market", price: 12.00 },
        { category: "Food Tours", title: "Murder Mystery at the Vineyard", price: 32.00 },
        { category: "Food Tours", title: "101 Ways to Serve Brussel Sprouts", price: 8.00 },
        { category: "Adventure Tours", title: "Ziplining the Poconos", price: 115.00 },
        { category: "Adventure Tours", title: "Water Skiing the Amazon", price: 4015.00 },
        { category: "Adventure Tours", title: "Parasailing Iceland", price: 3215.00 },
        { category: "Adventure Tours", title: "Kayaking to Antarctica", price: 3910.00 },
        { category: "Adventure Tours", title: "National Zoo: How to Grab a Skunk by the Neck", price: 80.00 }
    ];

    let tourSelectInput = document.querySelector("#tourSelect");
    let priceSelectInput = document.querySelector("#priceSelect");
    let letsGoBtn = document.querySelector("#letsGo");

    letsGoBtn.onclick = function()
    {
        createTableByCategory(toursArray, tourSelectInput);
        createTableByPrice(toursArray, priceSelectInput);
    }
}