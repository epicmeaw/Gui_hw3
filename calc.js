/*  Name: Zhu Lu 
    Email: Zhu_lu@student.uml.edu
*/
function calc() {
    var minValue = parseInt(document.querySelector("#minValue").value);
    var maxValue = parseInt(document.querySelector("#maxValue").value);
    var minRowValue = parseInt(document.querySelector("#minRowValue").value);
    var maxRowValue = parseInt(document.querySelector("#maxRowValue").value);
    var value1 = minValue;
    var value2 = minRowValue;
    
    createTable(minValue,maxValue,minRowValue,maxRowValue);
}

function remove(){
    //make a new div in g the replace body with g
    var body = document.getElementById("result");
    var g = document.createElement('div');
    g.setAttribute("id", "result");
    body.replaceWith(g);
}
 //This function creates a table with the 4 variable are put in
function createTable(minValue,maxValue,minRowValue,maxRowValue){
    //This function will replace reuslt with a new div with the same id  and replace the current with it
    remove();
    var body = document.getElementById("result");

    var table = document.createElement('TABLE');

    var tableB = document.createElement('TBODY');

    table.appendChild(tableB);
    //This is just alot of if else statement that checks for if the correct input are inputed
    if(!(minValue <= 50 && minValue >= -50)){
        var text = document.getElementById("error").innerHTML = "minValue is outside of limits (-50 - 50)";
    }else if(!(maxValue <= 50 && maxValue >= -50)){
        var text = document.getElementById("error").innerHTML = "maxValue is outside of limits (-50 - 50)";
    }else if(!(minRowValue <= 50 && minRowValue >= -50)){
        var text = document.getElementById("error").innerHTML = "minRowValue is outside of limits (-50 - 50)";
    }else if(!(maxRowValue <= 50 && maxRowValue >= -50)){
        var text = document.getElementById("error").innerHTML = "maxRowValue is outside of limits (-50 - 50)";
    }else if(!(minValue <= maxValue)){
        var text = document.getElementById("error").innerHTML = "minValue is greater the maxValue";
    }else if(!(minRowValue <= maxRowValue)){
        var text = document.getElementById("error").innerHTML = "minRowValue is greater the maxRowValue";
    }else if(isNaN(minValue) || isNaN(maxValue) || isNaN(minRowValue) || isNaN(maxRowValue)){
        var text = document.getElementById("error").innerHTML = "The input is not valid";
    }
    else{
        var text = document.getElementById("error").innerHTML = "";
     //Vertical
    for (var i = minRowValue; i <= maxRowValue + 1; i++)
    {
        //Create the rows
        var tr = document.createElement('TR');
        //Append the rows to the body
        tableB.appendChild(tr);
        
        //Horazontal
        for (var x = minValue; x <= maxValue + 1; x++)
        {
            var td = document.createElement('TD');
            if(i == minRowValue && x == minValue)
            {
                td.innerHTML = "Mult"

            }else if(i == minRowValue && x >= minValue){
                td.innerHTML = x - 1;
            }else if(x == minValue && i >= minRowValue){
                td.innerHTML = i - 1;
            }else{
                td.innerHTML = (i - 1) * (x -1);
            }
            tr.appendChild(td);
        }

    }
    //Append the table to the body
    body.appendChild(table);
}
}