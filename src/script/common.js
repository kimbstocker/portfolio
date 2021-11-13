
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

function clickedDog() {
    document.getElementById("cat").style.display = 'none';
    document.getElementById("dog").style.display = 'none';
    document.getElementById("be-friend").style.display = 'block';
}

function clickedCat() {
    document.getElementById("cat").style.display = 'none';
    document.getElementById("dog").style.display = 'none';
    document.getElementById("co-exist").style.display = 'block';
}

function clickedTea() {
    document.getElementById("tea").style.display = 'none';
    document.getElementById("coffee").style.display = 'none';
    document.getElementById("hightea").style.display = 'block';
}

function clickedCoffee() {
    document.getElementById("tea").style.display = 'none';
    document.getElementById("coffee").style.display = 'none';
    document.getElementById("soylatte").style.display = 'block';
}

function clickedNetflix() {
    document.getElementById("netflix").style.display = 'none';
    document.getElementById("youtube").style.display = 'none';
    document.getElementById("binge").style.display = 'block';
}

function clickedYouTube() {
    document.getElementById("netflix").style.display = 'none';
    document.getElementById("youtube").style.display = 'none';
    document.getElementById("recipe").style.display = 'block';
}

function clickedIOS() {
    document.getElementById("ios").style.display = 'none';
    document.getElementById("android").style.display = 'none';
    document.getElementById("converted").style.display = 'block';
}

function clickedAndroid() {
    document.getElementById("ios").style.display = 'none';
    document.getElementById("android").style.display = 'none';
    document.getElementById("respect").style.display = 'block';
}
