


function onPick() {


    fetch("./template.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {

            colorData(data.colorschemes);
            // console.log("data", data);
        })
        .catch(function (error) {
            console.log(error);
        });

}


function colorData(array) {
    document.getElementById('tableBody').innerHTML = "";
    array.forEach(el => {
        document.getElementById('tableBody').innerHTML += `<tr>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.activate ? 'true' : 'false'}</td>
        `
    })

}

