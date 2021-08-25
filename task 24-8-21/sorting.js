let colorSchemeData = null
let sortAsc = true


function onPick() {


    fetch("./template.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            colorSchemeData = data.colorschemes
            colorData(data.colorschemes);
            // console.log("data", data);
        })
        .catch(function (error) {
            console.log(error);
        });

}


function colorData(array, col, order) {
    document.getElementById('tableBody').innerHTML = "";
    array.forEach(el => {
        document.getElementById('tableBody').innerHTML += `<tr>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.activate ? 'true' : 'false'}</td>
        `
    })

}

function sortArray(column) {
    colorSchemeData.sort((a, b) => {
        a = a[column]
        b = b[column]
        if (sortAsc) {
            if (a > b) return 1
            if (a < b) return -1
            return 0

        }
        else {
            if (a > b) return -1
            if (a < b) return 1
            return 0
        }
    })
    colorData(colorSchemeData)
    sortAsc = !sortAsc

}