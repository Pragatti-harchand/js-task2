function onMatch() {

    fetch("./us.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            stepsNo(data.s1, 'img');
            console.log("data", data)
        })
        .catch(function (error) {
            console.log(error);
        });

}

function stepsNo(step, tag) {
    for (let i in step) {
        if (step[i].tag === tag) {
            console.log(step[i]);
        }

    }
}