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


let tl = gsap.timeline({ repeat: -1, yoyo: true })

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

// for homeV1
// const homes = document.querySelectorAll("#homeV2", "#homeV3", "#homeV4", "#homeV5", "#homeV6")

// const homeVs = document.querySelectorAll("#homeV2", "#homeV3", "#homeV4", "#homeV5", "#homeV6");


gsap.fromTo(".homeV1", { y: 40, duration: 6 }, { y: 10, duration: 6 });
gsap.fromTo(".homeV2", { y: 40, duration: 6 }, { y: 10, duration: 6 });
gsap.fromTo(".homeV3", { y: 40, duration: 6 }, { y: 10, duration: 6 });
gsap.fromTo(".homeV4", { y: -40, duration: 6 }, { y: 10, duration: 6 });
gsap.fromTo(".homeV5", { y: -40, duration: 6 }, { y: 10, duration: 6 });