

function returnname() {
    var x = document.getElementById("name-input");
    var welcome = "Hello ";
    var i;
    for (i = 0; i < x.length; i++) {
        welcome += x.elements[i].value;
    }
    document.getElementById("personal-greeting").innerHTML = welcome + "!!!";
    document.getElementById("welcome1").style.display = 'none';
    document.getElementById("welcome2").style.display = 'flex';
}

function passName() {
    document.getElementById("personal-greeting").innerHTML = "Hi I'll pass! :P";
    document.getElementById("welcome1").style.display = 'none';
    document.getElementById("welcome2").style.display = 'flex';

}

