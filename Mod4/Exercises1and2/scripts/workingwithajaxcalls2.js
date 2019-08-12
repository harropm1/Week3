"use strict";

function insertTableData(list)
{
    let tBody = document.getElementById("tableBody");
    let row1 = tBody.insertRow(-1);

    let cell1Name = row1.insertCell(0);
    let cell2Address = row1.insertCell(1);
    let cell3Phone = row1.insertCell(2);
    let cell4Fax = row1.insertCell(3);
    let cell5Visit = row1.insertCell(4);
    let cell6Company = row1.insertCell(5);

    cell1Name.innerHTML = list.name;
    cell2Address.innerHTML = list.address.street + ", " + list.address.suite + ", " + list.address.city;
    cell3Phone.innerHTML = list.phone;
    cell4Fax.innerHTML = list.email;
    cell5Visit.innerHTML = list.website;
    cell6Company.innerHTML = list.company.name;
}

function lookupIdInfo()
{
    //get xhr
    let xhr = new XMLHttpRequest();

    //tell xhr what do when response comes back
    xhr.onreadystatechange = function ()
    {
        //this is the code that runs when the reponse comes back
        if (this.readyState == 4 && this.status == 200)
        {
            //the variable this.responseText is the **string** that comes back from server
            //with the information requested
            //use JSON.parse to convert it back into JavaScript object
            let json = JSON.parse(this.responseText);
            insertTableData(json);
        }
    };

    //create a request that includes the number the user entered
    let idNumber = document.getElementById("idInput");
    let url = "https://jsonplaceholder.typicode.com/users/" + idNumber.value;
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