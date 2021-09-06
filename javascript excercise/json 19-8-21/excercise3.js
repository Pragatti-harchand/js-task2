function showData() {
    fetch("./user.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            schemColor(data.colorschemes);
            // console.log("data", data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function schemColor(array) {
    for (let i = 0; i < array.length; i++) {
        let active = array[i].activate;
        let jsonObj = array[i].json;
        for (let j in jsonObj) {
            if (active === true) {
                // console.log(jsonObj[j]);
                document.write(JSON.stringify(jsonObj[j]));
            }
        }
    }
}