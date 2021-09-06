var selectedRow = null;
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
    if (document.getElementById("r1").checked) {
        x = document.getElementById("r1").value
        // console.log(x);
    }
    if (document.getElementById("r1").checked) {
        x = document.getElementById("r1").value
        // console.log(x);
    }

    if (document.getElementById("c1").checked) {
        y = document.getElementById("c1").value
    }

    //

}
function readFormData() {
    var formData = {};
    formData["taskTitle"] = document.getElementById("taskTitle").value;
    formData["taskLanguage"] = document.getElementById("taskLanguage").value;
    formData["submittedBy"] = document.getElementById("submittedBy").value;
    formData["submittedTo"] = document.getElementById("submittedTo").value;
    formData["radioBy"] = document.getElementById("radioBy").value;
    formData["checkBy"] = document.getElementById("checkBy").value;
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
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = Data.radioBy;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = Data.checkBy;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskLanguage").value = "";
    document.getElementById("submittedBy").value = "";
    document.getElementById("submittedTo").value = "";
    document.getElementById("radioBy").value = "";
    document.getElementById("checkBy").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("taskTitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("taskLanguage").value = selectedRow.cells[1].innerHTML;
    document.getElementById("submittedBy").value = selectedRow.cells[2].innerHTML;
    document.getElementById("submittedTo").value = selectedRow.cells[3].innerHTML;
    document.getElementById("radioBy").value = selectedRow.cells[4].innerHTML;
    document.getElementById("checkBy").value = selectedRow.cells[5].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.taskTitle;
    selectedRow.cells[1].innerHTML = formData.taskLanguage;
    selectedRow.cells[2].innerHTML = formData.submittedBy;
    selectedRow.cells[3].innerHTML = formData.submittedTo;
    selectedRow.cells[4].innerHTML = formData.radioBy;
    selectedRow.cells[5].innerHTML = formData.checkBy;

}
function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("taskList").deleteRow(row.rowIndex);
    resetForm();

}
function validate() {
    isValid = true;
    if (document.getElementById("taskTitle").value == "") {
        isValid = false;
        document.getElementById("taskTitleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("taskTitleValidationError").classList.contains("hide"))
            document.getElementById("taskTitleValidationError").classList.add("hide");
    }
    return isValid;
}

