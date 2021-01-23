//Retrieve myTable
table = document.getElementById("myTable");

//declare global variables
var category = ["Name","Date","Cost"];
var i=0;

//function to create Table Header
function createTHead(){
  var tHead = table.createTHead();
  var hRow = tHead.insertRow(0);
  
//Create Table Header
for (;i<category.length;i++) {
  var th = document.createElement("th");
  var nameLabel = document.createTextNode(category[i]);
  th.appendChild(nameLabel);
  hRow.appendChild(th);
}
}

//function to create table
function createTable(){
//collect input value and assign it to corresponding text node
var nameVal = document.getElementById("nameInput").value;
var dateVal = document.getElementById("dateInput").value;
var costVal = document.getElementById("costInput").value;
  
//create an alert if one or more of the inputs are not complete
if (nameVal === "" || dateVal === "" || costVal === ""){
  alert("You have to complete all inputs");
} else {
  
//create a table
var tRow = table.insertRow(-1);
var tcell1 = tRow.insertCell(0);
var tcell2 = tRow.insertCell(1);
var tcell3 = tRow.insertCell(2);

//create button
var btn = document.createElement("BUTTON");
var txt = document.createTextNode("\u2713");
btn.className = "close";
btn.appendChild(txt);
tRow.appendChild(btn);

//Clicking the button will remove the row
var close = document.getElementsByClassName("close");
for (var i=0; i<close.length; i++){
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
}
}
  
//append input to cells
let nameTxt = document.createTextNode(nameVal);
tcell1.appendChild(nameTxt);
let dateTxt = document.createTextNode(dateVal);
tcell2.appendChild(dateTxt);
let costTxt = document.createTextNode(costVal+"$");
tcell3.appendChild(costTxt);
}

//Resets the inputs
document.getElementById("nameInput").value="";
document.getElementById("dateInput").value="";
document.getElementById("costInput").value="";
}
