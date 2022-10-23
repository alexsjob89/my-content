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

gsap.fromTo(".imgBox", { x: 140, opacity: 0.2, duration: 10, repeat: 1 }, { x: -10, opacity: 0.7, duration: 10, repeat: 1 })

// gsap.fromTo(".circleAbout", { x: -140, opacity: 0.2, duration: 5 }, { x: 0, opacity: 0.7, duration: 3 })

gsap.fromTo([".circleAbout"], { x: -140, opacity: 0.2, duration: 5, repeat: 3 }, { x: 0, opacity: 0.7, duration: 6, repeat: 3 })


// gsap.registerPlugin(ScrollTrigger)

// gsap.fromTo(".circleAbout", {
//     duration: 2,
//     x: "0",

// }, {
//     x: -190.5,
//     duration: 2,
//     ease: "linear",
//     scrollTrigger: {
//         trigger: ".circleAbout",
//         // markers: true,
//         start: "top 100%", //when top of herman passes 75% viewport height
//         end: "bottom 50%", //when bottom of herman passes 25% viewport height

//         // events: onEnter onLeave onEnterBack onLeaveBack,
//         toggleActions: "restart complete reverse "
//             //options: play, pause, resume, reset, restart, complete, reverse,none
//     }
// })