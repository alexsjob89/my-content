gsap.defaults({ duration: 20, ease: "none" });

let windowWrap = gsap.utils.wrap(0, window.innerWidth),
    windowYoyo = gsap.utils.wrapYoyo(0, window.innerWidth);

gsap.to([".img1", ".img2", "img3", ".img4", ".img5", ".img6", ".img7", ] {
    x: 10000,
    modifiers: {
        x: x => windowWrap(parseFloat(x)) + "px"
    }
});

gsap.to([".img1", ".img2", "img3", ".img4", ".img5", ".img6", ".img7"], {
    x: 10000,
    modifiers: {
        x: x => windowYoyo(parseFloat(x)) + "px"
    }
});