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
createAccount.addEventListener("create-account", (e) => {
    e.preventDefault();
    submit.addEventListener("submit", myFunction);

    function myFunction() {
        alert("the form was submitted!!")
    }
})

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