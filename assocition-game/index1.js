// this is get started button//
const createAccount = document.querySelector('#create-account')
const getStarted = document.querySelector('#getStarted')

createAccount.style.display = 'none'

getStarted.onclick = () => {
    if (createAccount.style.display === 'none') {
        createAccount.style.display = 'block';
    } else {
        createAccount.style.display = 'none';
    }
};