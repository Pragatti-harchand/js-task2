function showData() {
    let red = document.getElementById('red');
    red.setAttribute('style', 'color:red; font-size:30px;')
    fetch("https://61057f094b92a000171c5f3d.mockapi.io/gyg/user")
        .then(function (resp) {
            // if (resp.status === 404)
            return resp.json();

        })

        .then(function (data) {
            console.log(data);
            red.innerText = "Success";


        })
        .catch(error => {
            red.innerText = "failed";
        }
        );
}