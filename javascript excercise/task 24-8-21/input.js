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
    var name = document.getElementById('txt').value;
    var newArray = array.filter((el) => {
        return el.id == name
    })

    document.getElementById('tableBody').innerHTML += `
      <tr>
      <td>${newArray[0].id}</td>
      <td>${newArray[0].name}</td>
      <td>${newArray[0].activate ? 'true' : 'false'}</td>
      </tr>`


    // if (name === id) {
    // docu
    // console.log(newArray);

    // }






}


