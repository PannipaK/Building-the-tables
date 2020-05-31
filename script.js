// this link may help: https://www.w3schools.com/jsref/met_table_insertrow.asp
function addRow(first, last, age){
var table=document.getElementById("myTable");
var row=table.insertRow(table.length);
var cell_first=row.insertCell(0);
var cell_last=row.insertCell(1);
var cell_age=row.insertCell(2);
cell_first.innerHTML=first;
cell_last.innerHTML=last;
cell_age.innerHTML=age;
}
