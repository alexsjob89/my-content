// let button = document.querySelector('button')
// let div = document.querySelector('div')


// div.style.display = 'none';

// button.onclick = () => {
// if(div.style.display === 'none') {
//     div.style.display = 'block';
// } else{
//     div.style.display = 'none';
// }
// };


// var div = document.querySelector("div");
// var button = document.querySelector("button");

// button.onclick = function() {

//     if (div.className == "open") {
//         div.className = ""
//         button.innerHTML = "Show More"
//     } else {
//         div.className == "open";
//         button.innerHTML = "Show Less"
//     }
// };



// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.container')


// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//       draggable.classList.add('dragging')
//     })

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging')
//       })
// })

// containers.forEach(container => {
//     container.addEventListener('dragover',  e => {
//         e.preventDefault()
//         const afterElement = getDragAfterElement(container, e.clientY)
//         const draggable = document.querySelector('.dragging')
//         container.appendChild(draggable)
//     })
// })

// function getDragAfterElement(container, y) {
//   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

//   draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientReact()
//     console.log(box);
//   },{ offset: Number.POSITIVE_INFINITY} )
// }

// const message = document.querySelector("#message");
// const myInput = document.querySelector("#myInput");

// myInput.addEventListener("focus", function () {
//     message.textContent = myInput.value;
// } );

// document.addEventListener('dblclick', () => {
//     document.documentElement.requestFullscreen().catch((e) => {
//         console.log(e);
//     })
// })


// document.getElementById("myButton").onclick = function() {

//     var myName = document.getElementById("myText").value;
//     console.log("hello",myName);
// }



const myForm = document.getElementById('myForm');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();

    request.open("post", "login.php");
    request.onload = function() {
        console.log(request.responseText);
    }

    request.send(new FormData(myForm));
});