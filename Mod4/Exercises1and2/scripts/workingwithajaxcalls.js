"use strict";


function insertTableData(list)
{
    let tBody = document.getElementById("tableBody");

    let row1 = tBody.insertRow(-1);
    let cell1UserName = row1.insertCell(0);
    let cell2UserName = row1.insertCell(1);
    cell1UserName.innerHTML = "User ID";
    cell2UserName.innerHTML = list.userId;

    let row2 = tBody.insertRow(1)
    let cell3ID = row2.insertCell(0);
    let cell4ID = row2.insertCell(1);
    cell3ID.innerHTML = "ID";
    cell4ID.innerHTML = list.id;

    let row3 = tBody.insertRow(2)
    let cell5Title = row3.insertCell(0);
    let cell6Title = row3.insertCell(1);
    cell5Title.innerHTML = "Title";
    cell6Title.innerHTML = list.title;
    
    let row4 = tBody.insertRow(3)
    let cell7Completed = row4.insertCell(0);
    let cell8Completed = row4.insertCell(1);
    cell7Completed.innerHTML = "Completed";
    cell8Completed.innerHTML = list.completed;
}

function lookupIdInfo()
{
    //get xhr
    let xhr = new XMLHttpRequest();

    //tell xhr what do when response comes back
    xhr.onreadystatechange = function()
    {
        //this is the code that runs when the reponse comes back
        if (this.readyState == 4 && this.status == 200)
        {
            //find where to put the data
            let resultTable = document.getElementById("idInfo");
            //the variable this.responseText is the **string** that comes back from server
            //with the information requested
            //use JSON.parse to convert it back into JavaScript object
            let json = JSON.parse(this.responseText);
            resultTable = insertTableData(json);
        }
    };

    //create a request that includes the number the user entered
    let idNumber = document.getElementById("idInput");
    let url = "https://jsonplaceholder.typicode.com/todos/" + idNumber.value;
    xhr.open("GET", url, true);

    //send the request
    xhr.send(null);
}

//window onload
window.onload = function ()
{
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = lookupIdInfo;
}