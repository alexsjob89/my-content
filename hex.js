// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person);


// document.addEventListener("mouseover", myFunction);
// document.addEventListener("click", mySecondFunction);
// document.addEventListener("mouseout", myThirdFunction);


// function myFunction() {
//     document.getElementById("demo").innerHTML = "hello i am a Developer!";
// }

// function mySecondFunction() {
//     document.getElementById("demo").innerHTML = "clicked!"
//     document.body.style.background = "none";

// }

// function myThirdFunction() {
//     document.getElementById("demo").innerHTML = "mouse uot!";
//     document.body.style.backgroundColor = "red";

// }

document.addEventListener("click", myFunction);

function myFunction() {
    const frame = document.getElementById("myFrame");
    const h1 = frame.contentWindow.document.getElementByTagNme("h1")[0];
    const node = document.adaptNode(h1);
    document.body.appendChild(node);
};