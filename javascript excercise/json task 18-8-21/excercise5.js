function onSave() {
    fetch("./user.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            steparray(data.steps, 'text-4')
            // console.log("data", data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function steparray(array, elementname) {
    for (let i = 0; i < array.length; i++) {
        let ele = array[i].elements;
        for (let j = 0; j < ele.length; j++) {
            if (elementname === ele[j]) {
                var result = array[i].stepnum;
                document.getElementById("myid1").innerHTML = result;
            }
        }

    }
}




