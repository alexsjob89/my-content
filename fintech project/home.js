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

// cards animate

var tl = gsap.timeline({ repeat: Infinity, repeatDelay: 1, yoyo: true });
tl.to(".one", { x: -20, duration: 1 });
tl.to(".two", { x: 20, duration: 1 });
tl.to(".tree", { x: -20, duration: 1 });
tl.to(".four", { x: 20, duration: 1 });
tl.to(".five", { x: -20, duration: 1 });
tl.to(".six", { x: 20, duration: 1 });
tl.to(".seven", { x: -20, duration: 1 });
tl.to(".eight", { x: 20, duration: 1 });
tl.to(".nine", { x: -20, duration: 1 });

gsap.fromTo([".imagesCards", ".background"], { x: 140, opacity: 0.2, duration: 3, repeat: 3 }, { x: -10, opacity: 0.7, duration: 3, repeat: 3 })