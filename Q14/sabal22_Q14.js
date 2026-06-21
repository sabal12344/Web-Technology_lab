let count = 1;

function addRow(){

    let table = document.getElementById("myTable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = count++;

    cell2.innerHTML = "<select><option>Select Product</option><option>Apple</option><option>Banana</option></select>";

    cell3.innerHTML = "<input type='text' placeholder='Price'>";

    cell4.innerHTML = "<button class='trash' onclick='deleteRow(this)'>DEL</button>";

}


function deleteRow(btn){
    let row = btn.parentNode.parentNode;
    row.remove();
}