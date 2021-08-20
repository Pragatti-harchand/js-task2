function showData() {
    fetch("./user.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            schemColor(data.colorschemes, 1);
            // console.log("data", data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function schemColor(array, number) {

    // console.log(Object.keys(array[number].json));
    var res = Object.keys(array[number].json);
    document.getElementById("myid3").innerHTML = res;
}
