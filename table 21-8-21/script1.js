function onShow() {

    fetch("./user.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            dynamicTable(data)
            // console.log("data", data);
        })
        .catch(function (error) {
            console.log(error);
        });

}


// 


function dynamicTable(data) {
    if (data.length > 0)
        var temp = ""
    let tableBody = document.getElementById('myTable');

    let newArr = [];

    data.forEach((element, index) => {
        let jsonData = JSON.parse(data[index]['daily_pnl']);
        // console.log(jsonData);
        newArr.push(jsonData);

    });
    newArr.forEach(element => {
        // console.log(element);
        for (const key in element) {
            // console.log(key);
            temp +=
                ` <tr>
                        <td scope="row">${key}</td>
                        <td>${element[key]}</td>
                        <td>${element[key]}</td>
                    </tr>`
            // console.log(x);
        }
    })
    tableBody.innerHTML = temp;




}

