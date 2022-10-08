// gsap.fromTo(".ball1", { x: -30, duration: 3 }, { x: 20, duration: 30 });

const tl = gsap.timeline();
tl.fromTo(".ball1", { x: 100, duration: 3, }, { x: -100, duration: 3 });