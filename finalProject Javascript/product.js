


const array = [
    {
        title: 'watch',
        description: " girl watch",
        imageURL: '../image/css.jpg',
        stock: 'in stock',
        location: 'delhi',

    },
    {
        title: 'band',
        description: "girl watch",
        imageURL: '../image/watch.jpg',
        stock: 'out of stock',
        location: 'chandigarh'
    },
    {
        title: 'watch3',
        description: "girl watch",
        imageURL: '../image/watch2.jpg',
        stock: 'in stock',
        location: 'gujarat'

    },
    {
        title: 'girl watch',
        description: " Testing",
        imageURL: '../image/watch3.jpg',
        stock: 'out of stock',
        location: 'chandigarh'


    },
    {
        title: 'digital watch',
        description: " Testing",
        imageURL: '../image/watch.jpg',
        stock: 'out of stock',
        location: 'chandigarh'

    },
    {
        title: 'clock watch',
        description: " Testing",
        imageURL: '../image/android.jpg',
        stock: 'out of stock',
        location: 'chandigarh'

    },


]


localStorage.setItem('Items', JSON.stringify(array))
var getValueLocalStorage = JSON.parse(localStorage.getItem('Items'));
var dynamic = document.querySelector('.container');
for (var i = 0; i < getValueLocalStorage.length; i++) {
    var fetch = document.querySelector('.container').innerHTML;
    dynamic.innerHTML = `<div id="cards${i}" class="boxes">
    <div class="box-content">

    <h5>${getValueLocalStorage[i].title}</h5>

    <p>
    ${getValueLocalStorage[i].description}
    </p>
    <a class="showmore" href="#">
    </a>
    <i class="fa fa-thumbs-up"></i>
    <i class="fa fa-edit"></i>
    <i class="fa fa-trash"></i>
    </div>
    </div>` + fetch;
    // console.log(getValueLocalStorage[i].title);
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('${getValueLocalStorage[i].imageURL}')`;

}


function itemSearch() {
    var item = document.getElementById('myInput').value;
    var itemSear = getValueLocalStorage.filter((el) => {
        return el.title === item
    })
    itemSear.forEach((el) => {
        document.getElementById("container").innerHTML = " ";
        dynamicCard1 = document.getElementById("card");
        dynamicCard1.innerHTML = `<div id="cards${i}" class="boxes">
    <div class="box-content">

    <h5>${itemSear[0].title}</h5>
    <p>
    ${itemSear[0].description}
    </p>
    <a class="showmore" href="#">
    </a>
    <i class="fa fa-thumbs-up"></i>
    <i class="fa fa-edit"></i>
    <i class="fa fa-trash"></i>
    </div>
    </div>` + fetch;
        var bgimg = document.getElementById(`cards${i}`);
        bgimg.style.backgroundImage = `url('${el.imageURL}')`;

    });
    // var newArray = array.filter((el) => {
    //     return el.title == item
    // })


    //     var fetch = document.querySelector('.container').innerHTML;
    //     dynamic.innerHTML = `<div id="cards${i}" class="boxes">
    //     <div class="box-content">

    //     <h5>${el.title}</h5>

    //     <p>
    //     ${el.description}
    //     </p>
    //     <a class="showmore" href="#">
    //     </a>
    //     <i class="fa fa-thumbs-up"></i>
    //     <i class="fa fa-edit"></i>
    //     <i class="fa fa-trash"></i>
    //     </div>
    //     </div>` + fetch;
    //     // console.log(getValueLocalStorage[i].title);
    //     var bgimg = document.getElementById(`cards${i}`);
    //     bgimg.style.backgroundImage = `url('${newArray.imageURL}')`;


    // }
}


function addItem(event) {
    event.preventDefault();
    var title = document.getElementById("tname").value;
    console.log(title);
}









