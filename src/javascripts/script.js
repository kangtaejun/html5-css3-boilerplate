// Switching regular web navigation to handheld hamburger menu
function responsive() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("nav-container");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " responsive";
    } else {
        x.className = "topnav";
        y.className = "";
    }
}

// Script for displaying contents on regular web navigation
function openSubNav() {
    var x = document.getElementById("dropdown-content").style.display;

    if (x === "" || x === "none") {
        document.getElementById("dropdown-content").style.display = "block";
    } else {
        document.getElementById("dropdown-content").style.display = "none";
    }
}
