const myPara = document.getElementById('myPara')

myPara.classList.add("bold", "big-font")
myPara.classList.remove("bold")
myPara.classList.replace("big-font", "red-bg")

myPara.classList.toggle("red-bg");
myPara.classList.toggle("red-bg");

console.log(myPara.classList);