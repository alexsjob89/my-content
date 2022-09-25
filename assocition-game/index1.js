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