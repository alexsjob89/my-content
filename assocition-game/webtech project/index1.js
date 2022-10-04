// this is get started button//
const createAccount = document.querySelector('#create-account')
const getStarted = document.querySelector('#getStarted')

const logIn = document.querySelector('#login')
const loginSign = document.querySelector('#loginSign')

const submit = document.querySelector('#submit')
const logButton = document.querySelector('#logButton')


createAccount.style.display = 'none'

getStarted.onclick = () => {
    if (createAccount.style.display === 'none') {
        createAccount.style.display = 'block';
    } else {
        createAccount.style.display = 'none';
    }
};



loginSign.style.display = 'none'

logIn.onclick = () => {
    if (loginSign.style.display === 'none') {
        loginSign.style.display = 'block';
    } else {
        loginSign.style.display = 'none';
    }
};

//thill


// gsap.fromTo('.imgGrid', { x: 40, opacity: -0.5, duration: 4 }, { x: 20, opacity: 2, duration: 4 })

// gsap.defaults({ duration: 20, ease: 'none' });

// let windowWrap = gsap.utils.wrap(0, window.innerWidth),
//     windowYoyo = gsap.utils.wrapYoyo(0, window.innerWidth),

//     gsap.to(".img1", {
//         x: 10000,
//         modifiers: {
//             x: x => windowWrap(parseFloat(x)) + "px"
//         }
//     });

// gsap.to(".img7", {
//     x: 10000,
//     modifiers: {
//         x: x => windowYoyo(parseFloat(x)) + "px"
//     }
// });
let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })

tl.to(".one", { rotation: 360 });
tl.to(".two", { rotation: 360 });
tl.to(".three", { rotation: 360 });
tl.to(".four", { rotation: 360 });
tl.to(".five", { rotation: 360 });
tl.to(".six", { rotation: 360 });
tl.to(".nine", { rotation: 360 });
tl.to(".ten", { rotation: 360 });
tl.to(".eleven", { rotation: 360 });
tl.to(".twelve", { rotation: 360 });
tl.to("therteen", { rotation: 360 });
tl.to(".fourtin", { rotation: 360 });
tl.to(".fifteen", { rotation: 360 });
tl.to(".seventeen", { rotation: 360 });
tl.to(".eighteen", { rotation: 360 });
tl.to(" .twenteen", { rotation: 360 });
tl.to(".twenteenone", { rotation: 360 });