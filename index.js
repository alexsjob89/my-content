const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

let choosenProduct = products[0]

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});