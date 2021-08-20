"use strict";

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




function myFun1(stepNo, element) {
    if (myFun2(stepNo, element)) {
        if (stepNo === 1) return JSON.stringify(info.s1[element])
        if (stepNo === 2) return JSON.stringify(info.s2[element])
        if (stepNo === 3) return JSON.stringify(info.s3[element])
    }

}



function render(element) {
    element = JSON.parse(element)
    let el = `<${element.tag} type=${element.elemtype} src=${element.src} value="${element.text}" >`
    document.getElementById('show').innerHTML += el
}

function myFun3(schemeArray, name) {

    return schemeArray.find(i => i.name === name)

}
function myFun2(stepNo, element) {
    let el = info.steps.find(st => st.stepnum === stepNo && st.elements.includes(element))
    return el ? true : false
}

