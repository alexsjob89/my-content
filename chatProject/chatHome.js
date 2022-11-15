// const dragBar = document.getElementById("#resizeBar");

function dragStart(event) {
    event.dragTransfer.setData("resizeBar", event.target.id);
}

function dragging(event) {
    document.getElementById("resizeBar", event.target.id);
}

function allowDrop(event) {
    event.preventDefault("resizeBar");
}