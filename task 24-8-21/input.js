function onInput() {

    fetch("./template.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            inputData(data.colorschemes);
            // console.log("data", data);
        })
        .catch(function (error) {
            console.log(error);
        });

}
function inputData(array) {
    for (let i = 0; i < array.length; i++) {
        // var id = array[i].id;
        let element = []
        var newArray = array.filter((el) => {
            return el.id === name;
        })
        element.push(newArray);
        // console.log(id);
        var name = document.getElementById('txt').value;
        // if (name === id) {
        // document.write(newArray);
        console.log(newArray);
        // }






    }
}

