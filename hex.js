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

// document.addEventListener("click", myFunction);
// document.addEventListener("mouseover", myFunction)

// function myFunction() {
//     const frame = document.getElementById("myFrame");
//     const h1 = frame.contentWindow.document.getElementByTagNme("H1")[1];
//     const node = document.adoptNode(h1);
//     document.body.appendChild(node);

// };

// function myFunction() {
//     const frame = document.createElement("#frameone");
//     const node = document.createImgNode("this are frames!!!");
//     para.appendChild(node);
//     document.body.appendChild(para);
// }


// let text = "";

// for (let i = 0; i < 6; i++) {
//     text += "The number is -  " + i + "1" + " / " + "<br> ";
// }

// document.getElementById("demo").innerHTML = text;

// const cars = ["BMW", "Volvo", "Saab", "Ford"];

// let i = 0;
// let len = cars.length;
// let text = "";

// for (; i < len; i++) {
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Img", event.target.id);
});

/* Events fired on the drop target */
document.addEventListener("dragenter", function(event) {
    if (event.target.className == "droptarget") {
        document.getElementById("demo");
        event.target.style.backgroundColor = "grey";
    }
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

/* Events fired on the drop target */
document.addEventListener("dragleave", function(event) {
    if (event.target.className == "droptarget") {
        document.getElementById("demo").innerHTML = "Left the dropzone";
        event.target.style.backgroundColor = "";
    }
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {
        event.target.style.backgroundColor = "";
        var data = event.dataTransfer.getData("Img");
        event.target.appendChild(document.getElementById(data));
    }
});

document.addEventListener("dragend", function(event) {
    document.getElementById("demo");
    event.target.style.opacity = "1";
});