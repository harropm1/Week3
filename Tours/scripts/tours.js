"use strict";


//generic function for inserting a two column table
function insertTableData(list, tBody)
{
    let row = tBody.insertRow(tBody.rows.length);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = list.title;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = "$" + list.price;
}

//creating a table when sorting by a category (includes clearing just the body of the table)
function createTableByCategory(list, selection)
{
    let tBody = document.getElementById("tableBody");

    while (tBody.childNodes.length)
    {
        tBody.removeChild(tBody.childNodes[0]);
    }
    for (let i = 0; i < list.length; i++)
    {
        if (selection.value == list[i].category)
        {
            insertTableData(list[i], tBody);
        }
    }
}

//creating a table when sorting by price (includes clearing just the body of the table)
function createTableByPrice(list, selection)
{
    let tBody = document.getElementById("tableBody");

    while (tBody.childNodes.length)
    {
        tBody.removeChild(tBody.childNodes[0]);
    }

    for (let i = 0; i < list.length; i++)
    {
        if ((selection.value == "$0 - $49") && (list[i].price <= 49.99))
        {
            insertTableData(list[i], tBody);
        }
        else if ((selection.value == "$50 - $99") && (list[i].price >= 49.99) && (list[i].price <= 99.99))
        {
            insertTableData(list[i], tBody);
        }
        else if ((selection.value == "$100 - $499") && (list[i].price >= 99.99) && (list[i].price <= 499.99))
        {
            insertTableData(list[i], tBody);
        }
        else if ((selection.value == "$500 +") && (list[i].price >= 500.00))
        {
            insertTableData(list[i], tBody);
        }
    }
}

//window onload
window.onload = function ()
{
    //Array of tours with category, title of tour, and price given
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

    //defining variables
    let tourSelectInput = document.querySelector("#tourSelect");
    let priceSelectInput = document.querySelector("#priceSelect");

    let categoryBtn = document.querySelector("#categoryBtn")
    let priceBtn = document.querySelector("#priceBtn");

    categoryBtn.onclick = function ()
    {
        createTableByCategory(toursArray, tourSelectInput);

    }
    priceBtn.onclick = function ()
    {
        createTableByPrice(toursArray, priceSelectInput);
    }
}