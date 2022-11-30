gsap.fromTo(".logoOne", { x: -20, scale: 1.5, rotate: 90, duration: 1.5 }, { x: 0, scale: 1, rotate: 0, duration: 1.5 })

gsap.fromTo(".logoThree", { x: -20, scale: 1.5, yoyo: 10, rotate: -90, duration: 1.5 }, { x: 0, scale: 1, rotate: 0, duration: 1.5, yoyo: 10 })




gsap.fromTo("#one", { x: -200, scale: 0.7, duration: 1, opacity: 0 }, { x: 0, scale: 1, duration: 1.6, opacity: 1 })

gsap.fromTo("#two", { y: 110, scale: 0.7, duration: 3 }, { y: 0, scale: 1, duration: 3 })

gsap.fromTo("#tree", { x: -210, duration: 1 }, { x: 0, duration: 1 })
gsap.fromTo("#four", { x: 210, duration: 1 }, { x: 0, duration: 1 })
gsap.fromTo("#five", { scale: 0.7, duration: 5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 })
gsap.fromTo("#six", { y: 2, scale: 0, flip: 20 }, { x: 20, duration: 8, scale: 1.2 })

gsap.fromTo(".titlePro", { y: -120, opacity: 0 }, { y: 0, duration: 2, opacity: 1 }) ;
gsap.fromTo(".paraPro ", { y: 120, opacity: 0 }, { y: 0, duration: 2, opacity: 1 }) ;

// why section

// const homeContent = document.querySelectorAll(".home-content");
// const connectWay = document.querySelectorAll(".connectWay");

// const slideLeft = document.querySelector(".left");
// const slideRight = document.querySelector(".right");

let tween = gsap.fromTo(".icon7", {
    scale: 0.3,
    duration: 2,
    x: -60,
    rotation: 0,
    ease: "elastic"
}, { x: 0, duration: 3, scale: 1, rotation: 360 })