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


var div = document.querySelector("div");
var button = document.querySelector("button");

button.onclick = function() {

    if (div.className == "open") {
        div.className = ""
        button.innerHTML = "Show More"
    } else {
        div.className == "open";
        button.innerHTML = "Show Less"
    }
};