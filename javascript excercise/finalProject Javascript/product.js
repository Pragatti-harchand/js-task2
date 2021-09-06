


const array = [
    {
        title: 'watch',
        description: " girl watch",
        imageURL: '../image/css.jpg',
        stock: 'in',
        location: 'delhi',


    },
    {
        title: 'band',
        description: "girl watch",
        imageURL: '../image/watch.jpg',
        stock: 'out',
        location: 'chandigarh',

    },
    {
        title: 'watch3',
        description: "girl watch",
        imageURL: '../image/watch2.jpg',
        stock: 'in',
        location: 'gujarat',


    },
    {
        title: 'girl watch',
        description: " Testing",
        imageURL: '../image/watch3.jpg',
        stock: 'out',
        location: 'chandigarh',



    },
    {
        title: 'digital watch',
        description: " Testing",
        imageURL: '../image/watch.jpg',
        stock: 'out',
        location: 'chandigarh',


    },
    {
        title: 'clock watch',
        description: " Testing",
        imageURL: '../image/android.jpg',
        stock: 'out',
        location: 'chandigarh',


    },


]

// const array = []

// const getDataFromLocalStorage = () => {
//     const data = localStorage.getItem('productArray')
//     console.log(data);

//     return JSON.parse(data)
// }
// const array = getDataFromLocalStorage()
if (!localStorage.getItem('Items')) {

    localStorage.setItem('Items', JSON.stringify(array))
}
// localStorage.setItem('Items', JSON.stringify(array))

var getValueLocalStorage = JSON.parse(localStorage.getItem('Items'));
// let isAvailable = getValueLocalStorage.filter(e => !e.isTrash);
// console.log("isAvailable", isAvailable);
var dynamic = document.querySelector('.container');
for (var i = 0; i < getValueLocalStorage.length; i++) {
    var fetchA = document.querySelector('.container').innerHTML;
    dynamic.innerHTML = `<div id="cards${i}" class="boxes">
    <div class="box-content">

    <h5>${getValueLocalStorage[i].title}</h5>

    <p>
    ${getValueLocalStorage[i].description}
    </p>
    <a class="showmore" href="./card.html">show
    </a>
    <i class="fa fa-thumbs-up"></i>
    <i class="fa fa-edit"></i>
    <i class="fa fa-trash" onclick="removeCard( ${i} )"></i>
    </div>
    </div>` + fetchA;
    // console.log(getValueLocalStorage[i].title);
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('${getValueLocalStorage[i].imageURL}')`;

}



const itemSearch = (e) => {
    var item = document.getElementById('myInput').value;
    console.log(item);
    // document.querySelector('.container').innerHTML = " ";

    dynamicCard = document.querySelector(".container");
    dynamicCard.innerText = "";
    getValueLocalStorage.forEach((el, i) => {
        console.log(el.title);
        if (el.title == item) {

            console.log(el);
            // dynamicCard.innerHTML = '<h1> Hello </h1>'
            dynamicCard.innerHTML =
                `<div id="cards${i}" class="boxes">
                <div class="box-content">
                <h5>${el.title}</h5>
                <p>${el.description}</p>
                <a class="showmore" href="#">
                </a>
            <i class="fa fa-thumbs-up"></i>
            <i class="fa fa-edit"></i>
            <i class="fa fa-trash" onclick="removeCard()"></i>
            </div>
            </div>`
            console.log(getValueLocalStorage[i].title);
            var bgimg = document.getElementById(`cards${i}`);
            bgimg.style.backgroundImage = `url('${el.imageURL}')`;

        }


    });
}


const myFun = () => {

    var title = document.getElementById('tname').value;
    var describe = document.getElementById('dname').value;
    var image = document.getElementById('Iname').value;
    // var loc = 
    // var inst0p 

    const obj = {
        title: title,
        description: describe,
        imageURL: image,
        inStock: true,
        location: 'chandigarh',
        isTrash: false

    }
    console.log(obj)
    array.push(obj)

    localStorage.setItem('Items', JSON.stringify(array))



}
// remove card
const removeCard = (index) => {

    // console.log("remove", cards);
    console.log(index)

    // isAvailable[index].isTrash = true;
    // isAvailable = [...isAvailable]
    let product = array.find((product, i) => i === index)

    array.splice(index, 1)
    localStorage.setItem('Items', JSON.stringify(array))

    let trashItems = JSON.parse(localStorage.getItem('trash'))
    trashItems.push(product);
    localStorage.setItem('trash', JSON.stringify(trashItems))
    document.getElementById(`cards${index}`).remove()


}

const showProducts = () => {
    dynamic.style.display = 'block'
    document.querySelector('.trash-container').style.display = 'none'
}

const showTrash = () => {
    dynamic.style.display = 'none'
    let trashItems = JSON.parse(localStorage.getItem('trash'))
    console.log(trashItems)
    document.querySelector('.trash-container').innerHTML = "";
    for (let i = 0; i < trashItems.length; i++) {
        let fetchB = document.querySelector('.trash-container').innerHTML;
        document.querySelector('.trash-container').innerHTML += `<div id="cards${i}" class="boxes">
    <div class="box-content">

    <h5>${trashItems[i].title}</h5>

    <p>
    ${trashItems[i].description}
    </p>
    <a class="showmore" href="./card.html">show
    </a>
    
    <i class="fa fa-edit" onclick="restore"> </i>
    <i class="fa fa-trash" onclick="removeTrash( ${i} )"></i>
    </div>
    </div>`
        // console.log(getValueLocalStorage[i].title);
        let bgimg = document.getElementById(`cards${i}`);
        bgimg.style.backgroundImage = `url('${trashItems[i].imageURL}')`;

    }
    document.querySelector('.trash-container').style.display = 'block'
}
//  end of remove card


// filter by location
const selectLocation = () => {
    var checks = document.getElementsByClassName('checks');
    var str = [];
    for (let i = 0; i < 3; i++)
        if (checks[i].checked === true)
            str.push(checks[i].value)


    // console.log(str);
    dynamicCard = document.querySelector(".container");
    // console.log(dynamicCard);
    dynamicCard.innerHTML = "";
    getValueLocalStorage.forEach((val, i) => {
        // console.log(val.location);
        if (str.includes(val.location)) {

            console.log(val);
            // dynamicCard.innerHTML = '<h1> Hello </h1>'
            dynamicCard.innerHTML +=
                `<div id="cards${i}" class="boxes">
                <div class="box-content">
                <h5>${val.title}</h5>
                <p>${val.description}</p>
                <a class="showmore" href="#">
                </a>
            <i class="fa fa-thumbs-up"></i>
            <i class="fa fa-edit"></i>
            <i class="fa fa-trash" onclick="removeCard()"></i>
            </div>
            </div>`
            // console.log(getValueLocalStorage[i].title);
            var bgimg = document.getElementById(`cards${i}`);
            bgimg.style.backgroundImage = `url('${val.imageURL}')`;

        }


    });
}

const selectStocks = () => {
    var rates = document.getElementById('rates').value;
    var str = [];
    for (let i = 0; i < 3; i++)
        if (rates[i].checked === true)
            str.push(rates[i].value)
    console.log(str)

}
// dynamicCard = document.querySelector(".container");
// // console.log(dynamicCard);
// dynamicCard.innerHTML = "";
// getValueLocalStorage.forEach((val, i) => {
//     // console.log(val.location);
//     if (arr.includes(val.stock)) {

//         console.log(val);
//         // dynamicCard.innerHTML = '<h1> Hello </h1>'
//         dynamicCard.innerHTML +=
//             `<div id="cards${i}" class="boxes">
//             <div class="box-content">
//             <h5>${val.title}</h5>
//             <p>${val.description}</p>
//             <a class="showmore" href="#">
//             </a>
//         <i class="fa fa-thumbs-up"></i>
//         <i class="fa fa-edit"></i>
//         <i class="fa fa-trash" onclick="removeCard()"></i>
//         </div>
//         </div>`
//         // console.log(getValueLocalStorage[i].title);
//         var bgimg = document.getElementById(`cards${i}`);
//         bgimg.style.backgroundImage = `url('${val.imageURL}')`;

//     }


// });


// end of filter

const removeTrash = (index) => {
    let trashItems = JSON.parse(localStorage.getItem('trash'))


    trashItems.splice(index, 1)
    localStorage.setItem('Items', JSON.stringify(trashItems))
    document.getElementById(`cards${index}`).remove()



}






