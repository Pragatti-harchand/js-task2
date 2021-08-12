function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();

}
function readFormData() {
    var formData = {};
    formData["taskTitle"] = document.getElementById("taskTitle").value;
    formData["taskLanguage"] = document.getElementById("taskLanguage").value;
    formData["submittedBy"] = document.getElementById("submittedBy").value;
    formData["submittedTo"] = document.getElementById("submittedTo").value;
    return formData;
}
function insertNewRecord(Data) {
    var table = document.getElementById("taskList");
    var newRow = table.insertRow(0);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = Data.taskTitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = Data.taskLanguage;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = Data.submittedBy;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = Data.submittedTo;
    // cell4 = newRow.insertCell(4);
    // cell4.innerHTML = `<a onClick="closeInput">Edit</a>
    //                     <a>Delete</a>`;
}

function resetForm() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskLanguage").value = "";
    document.getElementById("submittedBy").value = "";
    document.getElementById("submittedTo").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById
}

