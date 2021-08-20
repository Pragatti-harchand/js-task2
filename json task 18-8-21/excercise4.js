
function onSaveData() {
    fetch("./user.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            schemColorCode(data.colorschemes, 'Black', 1, 'text-2')
            // console.log("data", data)
        })
        .catch(function (error) {
            console.log(error);
        });
}



function schemColorCode(array, colorname, number, eleemtname) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === colorname) {
            const string = 's' + number;
            console.log(string);
            let jsonObj = array[i].json;
            for (let j in jsonObj) {
                if (j === string) {
                    console.log(jsonObj[j][eleemtname].style.color);
                    // document.getElementById("myid").innerHTML = result;

                }
            }
        }
    }
}
