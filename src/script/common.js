
function greetName() {
    var name = document.getElementById("visitor-name").value;
    document.getElementById("personal-greeting").innerText = "Hello " + name + "!!!";
    document.getElementById("welcome1").style.display = 'none';
    document.getElementById("welcome2").style.display = 'flex';
    localStorage.setItem("welcome-name", name);
}

function greetNamePass() {
    document.getElementById("personal-greeting").innerText = "Hi I'll Pass! 😜";
    document.getElementById("welcome1").style.display = 'none';
    document.getElementById("welcome2").style.display = 'flex';
}

function prefillName() {
    var name = localStorage.getItem("welcome-name");
    if (name && name.length > 0) {
        document.getElementById("thank-name").innerText = "Thank you, " + name + "!!!";
        document.getElementById("contact-name").value = name;
    }
}


function ClickedButton(clicked_id) {
    var y = clicked_id; 
    var clickedid = clicked_id + "-clicked";
    document.getElementById(y).style.display = "none";
    document.getElementById(clickedid).style.display = "block";
}


function DropDownMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

