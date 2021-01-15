//Retrieve myTable
table = document.getElementById("myTable");

//declare global variables
var category = ["Name","Date","Cost"];
var i=0;

function createTable(){
  var tHead = table.createTHead();
  var hRow = tHead.insertRow(0);
  
//Create Table Header
for (;i<category.length;i++) {
  var th = document.createElement("th");
  var nameLabel = document.createTextNode(category[i]);
  th.appendChild(nameLabel);
  hRow.appendChild(th);
}

  
//collect input value and assign it to corresponding text node
var name = document.getElementById("nameInput").value;
var date = document.getElementById("dateInput").value;
var cost = document.getElementById("costInput").value;
  
//create an alert if one or more of the inputs are not complete
if (name === "" || date === "" || cost === ""){
  alert("You have to complete all inputs");
} else {
  
//create a table
var tRow = table.insertRow(-1);
var tcell1 = tRow.insertCell(0);
var tcell2 = tRow.insertCell(1);
var tcell3 = tRow.insertCell(2);
  
//append input to cells
let nameVal = document.createTextNode(name);
tcell1.appendChild(nameVal);
let dateVal = document.createTextNode(date);
tcell2.appendChild(dateVal);
let costVal = document.createTextNode(cost+"$");
tcell3.appendChild(costVal);
}

//Resets the inputs
document.getElementById("nameInput").value="";
document.getElementById("dateInput").value="";
document.getElementById("costInput").value="";
}