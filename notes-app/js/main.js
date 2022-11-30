// const nodeMap = document.getElementById("myImg").attributes;

// let text = "";
// for (let i = 0; i < nodeMap.length; i++) {
//     text += nodeMap[i].name + " = " + nodeMap[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

var tween = gsap.fromTo(".one", {
    duration: 4,
    x: 750,
    ease: "none",
    paused: true
}, { x: 200 });

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();