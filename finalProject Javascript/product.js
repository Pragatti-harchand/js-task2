
var titlearray = ["css", "js", "python", "java", "android", "jquery"];
var descriptionarray = ["css style", "js program", "python code", "java objects", "android program", "jquery objects"];
var dynamic = document.querySelector('.container');
for (var i = 0; i < titlearray.length; i++) {
    var fetch = document.querySelector('.container').innerHTML;
    dynamic.innerHTML = `<div id="cards${i}" class="boxes">





    <div class="box-content">
    <h5>${titlearray[i]}</h5>
    <p>
    ${descriptionarray[i]}
    </p>
    <a class="showmore" href="#">
    </a>
    <i class="fa fa-thumbs-up"></i>
    <i class="fa fa-edit"></i>
    <i class="fa fa-trash"></i>
    </div>
    </div>` + fetch;

    var bgimg = document.getElementById(`cards${i}`);

    bgimg.style.backgroundImage = `url('../image/${titlearray[i]}.jpg')`;

}
itemSearch(titlearray)
function itemSearch(titlearray) {
    var filter = document.getElementById('myInput').value;
    for (var i = 0; i < titlearray.length; i++) {

        var fetch = document.querySelector('.container').innerHTML;

    }
}




