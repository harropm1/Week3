"use strict";


//generic function for inserting a two column table
function insertTableData(list, tBody)
{
    let row1 = tBody.insertRow(0);
    let cell1Name = row1.insertCell(0);
    let cell2Name = row1.insertCell(1);
    cell1Name.innerHTML = "Name";
    cell2Name.innerHTML = list.name;

    let row2 = tBody.insertRow(1)
    let cell3Elevation = row2.insertCell(0);
    let cell4Elevation = row2.insertCell(1);
    cell3Elevation.innerHTML = "Elevation";
    cell4Elevation.innerHTML = list.elevation;

    let row3 = tBody.insertRow(2)
    let cell5Elevation = row3.insertCell(0);
    let cell6Elevation = row3.insertCell(1);
    cell5Elevation.innerHTML = "Effort";
    cell6Elevation.innerHTML = list.effort;

    let cell4 = row.insertCell(3);
    cell4.innerHTML = list.img;

    let cell5 = row.insertCell(4);
    cell5.innerHTML = list.desc;

    let cell6 = row.insertCell(5);
    cell6.innerHTML = "Latitude: " + list.coords.lat + "\nLongitude: " + list.coords.lng;
}

//creating a table when sorting by a category (includes clearing just the body of the table)
function createTable(list, selection)
{
    let tBody = document.getElementById("tableBody");

    while (tBody.childNodes.length)
    {
        tBody.removeChild(tBody.childNodes[0]);
    }
    for (let i = 0; i < list.length; i++)
    {
        if (selection.value == list[i].name)
        {
            insertTableData(list[i], tBody);
        }
    }
}

//window onload
window.onload = function ()
{
    let objects;

    let mountainSelectInput = document.querySelector("#mountainSelect");

    $.getJSON("data/data.json", function (data)
    {
        objects = data.mountains;
        for (let i = 0; i < objects.length; i++)
        {
            let mountainName = objects[i].name;
            let element = document.createElement("option");
            element.text = mountainName;
            element.value = mountainName;
            mountainSelectInput.appendChild(element);
        }
    }); //closing JSON object

    //defining variables
    let mountainBtn = document.querySelector("#mountainBtn")

    mountainBtn.onclick = function ()
    {

        createTable(objects, mountainSelectInput);
    }
}