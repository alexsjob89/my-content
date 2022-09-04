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

// var text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// document.getElementById("fruits").innerHTML = text;

// function myFunction(item, index) {
//     text += index + ": " + item + "<br>";


// }


// let text = "ABCDEFG";
// const myArr = Array.from(text);

// document.getElementById("fruits").innerHTML = myArr;

// Array.prototype.myUcase = function() {
//     for (let i = 0; i < this.length; i++) {
//         this[i] = this[i].toUpperCase();
//     }
// };

// const fruits = ["banana", "orange", "apple", "mango"];
// fruits.push("kiwi", "lemon")

// document.getElementById("fruits").innerHTML = fruits;

// const fruits = ["Banana", "Orange", "lemon", "Apple", "Mango"];

// const citrus = fruits.slice(0, 2);

// document.getElementById("fruits").innerHTML = citrus;

// function getSum(total, num) {
//     return total - num;
// }

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// mycar = new Model("Ford", "Mustang");
// document.getElementById("fruits").innerHTML = mycar.show();

// const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const d = new Date();
// let name = month[d.getMonth()];

//

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}