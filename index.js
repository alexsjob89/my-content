function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols() {
    const symbols = '@£$%%^&*(*()_+{}|"?:>'
    return symbols[Math.floor(Math.random() * symbols.length)]
}


console.log(getRandomNumber());