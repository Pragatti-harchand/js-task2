function onShow() {

    fetch("./us.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            myFun2(data.s1, 'text');
            console.log("data", data);
        })
        .catch(function (error) {
            console.log(error);
        });

}

function myFun2(step, elementype) {
    let count = 0
    for (let s in step) {
        if (step[s].elemtype === elementype) count++
    }
    // console.log(count)
    document.getElementById("myans").innerHTML = count;
}