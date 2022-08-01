var slider_img = document.querySelector('.slider-img');
var market = ['sound.jpg', 'coffee.jpg', 'workbench.jpg']
var i = 1;

function prev() {
    if (i <= 0) i = market.length;
    i--;
    return setImg();
}

function next() {
    if (i >= market.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'market/' + market[i]);
}