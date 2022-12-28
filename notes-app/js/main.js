// const btnBox = document.querySelector("#two")
// const btnthree = document.querySelector("#three")
// const btnfour = document.querySelector("#four")
// const btnfive = document.querySelector("#five")

// const boxt = document.querySelector(".Two-box")
// const boxThree = document.querySelector(".Three-box")
// const boxFour = document.querySelector(".Four-box")
// const boxFive = document.querySelector(".Five-box")

// const btnboxs = document.querySelectorAll("#boxes-content")
// const boxesbox = document.querySelectorAll(".box")

// btnBox.addEventListener("click", () => {
//     if (boxt.style.display === "block") {
//         boxt.style.display = "none"
//     } else {
//         boxt.style.display = "block";
//     }
// });



// btnthree.addEventListener("click", () => {
//     if (boxThree.style.display === "block") {
//         boxThree.style.display = "none";
//     } else {
//         boxThree.style.display = "block";
//     }

// });

// btnfour.addEventListener("click", () => {
//     if (boxFour.style.display === "block") {
//         boxFour.style.display = "none";
//     } else {
//         boxFour.style.display = "block";
//     }

// });

// btnfive.addEventListener("click", () => {
//     if (boxFive.style.display === "block") {
//         boxFive.style.display = "none";
//     } else {
//         boxFive.style.display = "block";
//     }

// });




// function show() {
//     document.getElementById("content").style.height = "400px";
//     document.getElementById("content").style.display = "block";
//     document.getElementById("show").style.display = "none";
// }

// function hide() {
//     document.getElementById("content").style.height = "0px";
//     document.getElementById("content").style.display = "none";
//     document.getElementById("show").style.display = "inline";
// }


// const names = ["jhon", "frank", "ben", "clark", "kent"]
// const greetings = ["good morning", "how are you today?"]

// for (name of names)

//     console.log(`my name is ${name}, ${greetings}`);

// const content = document.getElementById("content");
// const button = document.getElementById("btn");

// button.onclick = function() {
//     if (content.className === "open") {
//         content.className = "";
//         button.innerHTML = "show more";

//     } else {
//         content.className = "open";
//         button.innerHTML = "show less";
//     }
// };

// const main = document.querySelector("main");

// let htmlString = "";

// for (let i = 0; i < 100; i++) {
//     htmlString += `<div>${[i]}</div>`;

// }
// main.innerHTML = htmlString;


// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// const lione = document.createElement("li");
// const litwo = document.createElement("li");
// const lithree = document.createElement("li");
// const H1 = document.createElement("h1");

// ul.append(H1, li);

// H1.innerText = "movieBox";
// li.innerText = "movies";
// lione.innerText = "foodBox";
// litwo.innerText = "drinks";
// lithree.innerText = "fun";

// ul.classList.add("main-list-header");
// li.classList.add("main-list");
// lione.classList.add("main-one");
// litwo.classList.add("main-two");
// lithree.classList.add("main-three");


// const list = document.querySelectorAll("li");
// const main = document.querySelector("#main");
// const changeBackground = document.querySelector(".box-1");

// function changeBgColor() {
//     changeBackground.style.backgroundColor = "blue";
// }

// function changeBgColorNone() {
//     changeBackground.style.background = "none";
// }

// function changeBorderColor() {
//     changeBackground.style.border = "2px solid red";
// }

// function changeBgRed() {
//     main.style.border = "2px solid red";

// }



// changeBackground.addEventListener("click", changeBgColor);

// changeBackground.addEventListener("mouseleave", changeBgColorNone);

// changeBackground.addEventListener("focus", changeBorderColor);


// const para = document.querySelector("#para");

// para.classList.add("bold");

// console.log(para);


// const buttonOne = document.getElementById("buttonOne");
// const buttonTwo = document.getElementById("buttonTwo");
// const buttonThree = document.getElementById("buttonThree");

// let boxOne = document.getElementById("box-one");
// let boxTwo = document.getElementById("box-two");
// let boxThree = document.getElementById("box-three");

// buttonOne.addEventListener("click", function() {

//     if (boxOne.style.display === "none") {
//         boxOne.style.display = "block"
//     } else {
//         boxOne.style.display = "none"
//     }

// })

// buttonTwo.addEventListener("click", function() {
//     if (boxTwo.style.display === "none") {
//         boxTwo.style.display = "block"
//     }
// })

// buttonThree.addEventListener("click", function() {
//     if (boxThree.style.display === "none") {
//         boxThree.style.display = "block"
//     }
// })

// window.addEventListener("mouseup", function(event) {
//     let boxOne = document.getElementById("box-one");
//     if (event.target != boxOne && event.target.parentNode != boxOne) {
//         boxOne.style.display = "block";
//     }
// })

// window.addEventListener("mouseup", function(event) {
//     let boxTwo = document.getElementById("box-two");
//     if (event.target != boxTwo && event.target.parentNode != boxTwo) {
//         boxTwo.style.display = "none";
//     }
// })
let boxArry = ["box-one", "box-two", "box-three"]
window.addEventListener("mouseup", function(event) {

    for (let i = 0; i < boxArry.length; i++) {
        let box = document.getElementById(boxArry[i]);
        if (event.target != box && event.target.parentNode != box) {
            box.style.display = "none";
        }
    }
})