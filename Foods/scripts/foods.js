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


window.onload = function()
{
    let menu = [
        //breakfast menu, array 0
        [{item: "Sausage and Egg Biscuit", price: 3.49}, {item: "Three Pancakes", price: 5.49}, {item: "Scrambled Eggs", price: 3.49}],
        //lunch menu, array 1
        [{item: "Turkey Club", price: 6.49}, {item: "Grilled Cheese", price: 4.49}, {item: "Cheeseburger", price: 6.99}, {item: "Cheeseburger with Fries", price: 8.49}],
        //dinner menu, array 2 
        [{item: "Steak", price: 25.99}, {item: "Chicken", price: 15.99}, {item: "Pasta", price: 16.49}, {item: "Salmon", price: 20.99}, {item: "Fish and Chips", price: 14.99}]
    ];

    let menuSelectInput = document.querySelector("#menuSelect");

    menuSelectInput.onchange = function()
    {
        
    }

}