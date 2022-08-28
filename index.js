const theParent = document.querySelector('#moreBtn');
const contentPara = document.querySelector('.content');
// theParent.addEventListener('click', doSomething, false);

// function doSomething(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         // alert('helllo' + clickedItem);
//     }

//     console.log(theParent, 'clicked');
// }

changeColor(contentPara)

function changeColor(contentPara) {
    contentPara.style.backgroundColor = 'red';
}