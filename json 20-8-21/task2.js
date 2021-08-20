function onPick() {

    fetch("./us.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            stepsNo(data.s1, 'text');
            // console.log("data", data)
        })
        .catch(function (error) {
            console.log(error);
        });

}

function stepsNo(step, elementype) {
    let elements = []
    for (let s in step) {
        if (step[s].elemtype === elementype) {
            elements.push(step[s].elem)
        }
    }
    // console.log(elements[elements.length - 1])
    var result = elements[elements.length - 1];
    document.getElementById("myres").innerHTML = result;
}