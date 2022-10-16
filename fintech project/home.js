var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navBar").style.top = "-40";
    } else {
        document.getElementById("navBar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}