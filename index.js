// const container = document.querySelectorAll('.container');


// for (i = 0; i < container.length; i++) {
//     container[i].style.fontSize = '40px';
//     container[i].style.color = 'blue';
// }

// const buttonOne = document.querySelector('.box-1')
// const buttonTwo = document.querySelector('.box-2')
// const buttonTree = document.querySelector('.box-3')


// function changeBgColor() {
//     buttonOne.style.backgroundColor = 'blue';
// }

// buttonOne.addEventListener('mouseover', changeBgColor);

// function changeBgColor() {
//     buttonTwo.style.backgroundColor = 'blue';
// }

// buttonTwo.addEventListener('mouseover', changeBgColor);

// function changeBgColor() {
//     buttonTree.style.backgroundColor = 'blue';
// }

// buttonTree.addEventListener('mouseover', changeBgColor);

// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');

// hiddenContent.style.display = 'none';

// function revealContent() {
//     if (hiddenContent.style.display = 'block') {
//         hiddenContent.style.display = 'none'
//     } else {
//         hiddenContent.style.display = 'block'
//     }
// }

// revealBtn.addEventListener("click", revealContent);


// const ages = [4, 12, 16, 20];

// function checkAge(age) {
//     return age >
//         document.getElementById("ageToCheck").value;
// }

// function myFunction() {
//     document.getElementById("fruits").innerHTML = ages.find(checkAge);
// }

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("fruits").innerHTML = text;

function myFunction(item, index) {
    text += index + ": " + item + "<br>";


}