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
    for (let i = 0; i < array.length; i++) {
        var id = array[i].id;
        var activate = array[i].activate;
        var name = array[i].name;
        document.getElementById('tableBody').innerHTML += `
    


        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${activate}</td>
        </tr>`




    }

}