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


// document.addEventListener("dragstart", function(event) {
//     event.dataTransfer.setData("Img", event.target.id);
// });

/* Events fired on the drop target */
// document.addEventListener("dragenter", function(event) {
//     if (event.target.className == "droptarget") {
//         document.getElementById("demo");
//         event.target.style.backgroundColor = "grey";
//     }
// });

// document.addEventListener("dragover", function(event) {
//     event.preventDefault();
// });

// /* Events fired on the drop target */
// document.addEventListener("dragleave", function(event) {
//     if (event.target.className == "droptarget") {
//         document.getElementById("demo").innerHTML = "Left the dropzone";
//         event.target.style.backgroundColor = "";
//     }
// });

// document.addEventListener("drop", function(event) {
//     event.preventDefault();
//     if (event.target.className == "droptarget") {
//         event.target.style.backgroundColor = "";
//         var data = event.dataTransfer.getData("Img");
//         event.target.appendChild(document.getElementById(data));
//     }
// });

// document.addEventListener("dragend", function(event) {
//     document.getElementById("demo");
//     event.target.style.opacity = "1";
// });

// document.getElementById("myInput").addEventListener("invalid", myFunction);

// function myFunction() {
//     alert("You must fill out the form!");
// }


// var i = 0;

// function move() {
//     if (i == 0) {
//         i = 0;
//         var elem = document.getElementById("myBar");
//         var width = 0;
//         var id = setInterval(frame, 20);

//         function frame() {
//             if (width >= 100) {
//                 clearInterval(id);
//                 i = 0;
//             } else {
//                 width++;
//                 elem.style.width = width + "%";
//                 elem.style.border = "10%";
//                 elem.style.borderColor = "darkgreen";
//                 elem.style.borderRadius = "0 8px 8px 0"
//                 elem.style.borderSpacing = "24px"
//             }
//         }
//     }
// }

// function myFunction() {
//     const element = document.getElementById("myDIV");
//     element.getElementsByTagName("p")[0].style.fontSize = "24px";
//     element.node.firstChild().style.color = "green"
//     element.style.color = "red";

// }

// const paints = ["red", "green", "yellow", "black"];
// const arr1 = ["blue", "purple"];
// const painters = paints.slice(-3);
// const children = arr1.concat(paints);

// console.log(children);

// document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
//     const inputField = copyLinkContainer.querySelector(".copy-link-input");
//     const copyButton = copyLinkContainer.querySelector(".copy-link-button");


//     inputField.addEventListener("focus", () => inputField.select());

//     copyButton.addEventListener("click", () => {
//         const text = inputField.value;

//         inputField.select();
//         navigator.clipboard.writeText(text);

//         inputField.value = "copied!";
//         setTimeout(() => inputField.value = text, 2000);
//     });
// });


function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "default";

    function activateTheme(themeName) {
        themeStylesheetLink.setAttribute("href", `${themeName}.css`);
    }

    themeSelect.addEventListener("change", () => {
        activateTheme(themeSelect.value);
        localStorage.setItem("theme", themeSelect.value);
    });

    themeSelect.value = currentTheme;
    activateTheme(currentTheme);
}

initThemeSelector();