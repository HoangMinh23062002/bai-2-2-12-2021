function myFuntion() {
    var a = document.getElementById('text_1').value;
    a = parseInt(a);
    var b = document.getElementById('text_2').value;
    b = parseInt(b);

    var c = document.getElementById('select');
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var k;
    switch (value) {
        case 1:
            {
                k = (a + (b * 2)) / 3;
                k = parseFloat(k);
                document.getElementById(result).value;
            }
        case 2:
            {
                k = (a * 2) + (b * 3) / 5;
                k = parseFloat(k);
                document.getElementById(result).value;
            }
        case 3:
            {
                k = (a * 3) + (b * 4) / 7;
                k = parseFloat(k);
                document.getElementById(result).value;
            }
    }
    if (k >= 9) {
        document.getElementById('display').innerHTML = "Học sinh giỏi";
        document.getElementById('display').style.color = "red";
    }
    if (k >= 7 && k < 5) {
        document.getElementById('display').innerHTML = "Học sinh khá";
        document.getElementById('display').style.color = "yellow";
    }
    if (k >= 5 && k < 7) {
        document.getElementById('display').innerHTML = "Học sinh trung bình";
        document.getElementById('display').style.color = "blue";
    }
}

function myFuntion2() {
    document.getElementById('text_1').value = "";
    document.getElementById('text_2').value = "";


}