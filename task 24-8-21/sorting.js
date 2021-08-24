function onSort() {

    fetch("./template.json")
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            // colorschemes.sort((i, j) => {
            //     i = i.toUppercase();
            //     j = j.toUppercase();
            //     if (i > j) return -1;
            //     if (i < j) return 1;
            //     return 0;
            sortData(data.colorschemes);
        })
        // console.log(data);

        .catch(function (error) {
            console.log(error);
        });

}

// $('th').on('click', function () {
//     var column = $(this).data('column');
//     var order = $(this).data('order');
//     console.log('column was clicked', column, order)
//     if (order == 'desc') {
//         $(this).data('order', "asc")

//     } else {
//         $(this).data('order', "desc")
//     }
// })
// $(document).ready(function () {
//     $("#myTable").tablesorter()

// });

function sortData(array) {
    for (let i = 0; i < array.length; i++) {
        var id = array[i].id;
        var activate = array[i].activate;
        var name = array[i].name;

        document.getElementById('tableBody').innerHTML += `

        


        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${activate}</td>
        </tr>`

    }

}