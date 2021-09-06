function validation() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('conpassword').value;


    if (name == null || name == "") {
        document.getElementById('username').innerHTML = "** please fill the user field";
        return false;

    }
    else if (!isNaN(name)) {
        document.getElementById('username').innerHTML = "** only character are allowed";
        return false;
    }
    else {
        document.getElementById('username').innerHTML = "";
    }

    if (password == "") {
        document.getElementById('userpassword').innerHTML = "** please fill the password field";
        return false;
    }
    else if ((password.length <= 2) || (password.length > 20)) {
        document.getElementById('userpassword').innerHTML = "** password length must be between 5 and 20";
        return false;
    }
    else {
        document.getElementById('userpassword').innerHTML = "";
    }
    if (password != confirmpassword) {
        document.getElementById('userconf').innerHTML = "** password are not matching";
        return false;
    }
    else {
        document.getElementById('userconf').innerHTML = "";
    }
    console.log(name);
    console.log(password);
    console.log(confirmpassword);

}