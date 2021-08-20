let info = null


fetch("./user.json")
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        info = data
    })
    .catch(function (error) {
        console.log(error);
    });

console.log(info)

function myFun2(colorschemes, name, stepNo, element) {
    let el = info.steps.find(st => st.stepnum === stepNo && st.elements.includes(element))
    let cl = info.colorschemes.find(cs => cs.name === name && st.s1.includes(element))

}

