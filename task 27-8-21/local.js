function handleSubmit() {

    let form = document.getElementById("form1");
    let tableBody = document.getElementById("tableBody");
    let formData = new FormData(form);
    let formObj = {};
    for (let [key, value] of formData) {
        formObj[key] = value;
    }
    localStorage.setItem("formdata", JSON.stringify(formObj));
    tableBody.innerHTML += `<tr>
                     <td>${formData.get("name")}</td>
                     <td>${formData.get("last")}</td>
                     <td><button onclick="deleteRow(event)">Delete</button></td>
                        
                    </tr>`;
}
function deleteRow(event) {
    let button = event.target;
    button.closest("tr").remove();
}
