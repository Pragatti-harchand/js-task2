var avgIndiaA = 0;
var avgIndiaB = 0
var calcAverageA = () => {
    var a, b, c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = Number(document.getElementById("third").value);
    avgIndiaA = (a + b + c) / 3 | 0;
    document.getElementById("answer").value = avgIndiaA;

}
var calcAverageB = () => {
    var X, Y, Z;
    X = Number(document.getElementById("match4").value);
    Y = Number(document.getElementById("match5").value);
    Z = Number(document.getElementById("match6").value);
    avgIndiaB = (X + Y + Z) / 3 | 0;
    document.getElementById("answer1").value = avgIndiaB;

}

var checkwinner = () => {

    if (avgIndiaA > avgIndiaB * 2) {
        document.getElementById("winners").innerHTML = `India A wins(${avgIndiaA} vs ${avgIndiaB})`;
    }
    else if (avgIndiaA * 2 < avgIndiaB) {
        document.getElementById("winners").innerHTML = `India B wins(${avgIndiaA} vs ${avgIndiaB})`;
    }
    else {
        document.getElementById("winners").innerHTML = "no teams wins";
    }

};

