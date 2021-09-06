function showData() {
    fetch("./user.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            activeJson(data.colorschemes);
            // console.log("data", data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function activeJson(array) {
    for (let i = 0; i < array.length; i++) {
        var active = array[i].activate;
        if (active === true) {
            // console.log(array[i].json);
            document.write(JSON.stringify(array[i].json));

        }

    }
}