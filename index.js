const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [{
            id: 1,
            title: "Air Forcr",
            price: 119,
            colors: [{
                    code: "black",
                    img: "./images/kisspng-air-jordan-shoe-sneakers-nike-jordan-spizike-air-jordan-basketball-shoes-5a7bfa0d76e378.869957621518074381487.png",
                },
                {
                    code: "darkblue",
                    img: "./images/kisspng-air-jordan-jumpman-nike-shoe-sneakers-jordan-5ac6ff8647e204.1081633615229909822944.png",
                },
            ],
        },
        {
            id: 2,
            title: "Air Jordan",
            price: 149,
            colors: [{
                    code: "lightgray",
                    img: "./images/kisspng-jumpman-air-jordan-sneakers-shoe-nike-michael-jordan-5acd0b6ea977a7.2824670115233872466942.png",
                },
                {
                    code: "green",
                    img: "./images/kisspng-jumpman-nike-free-air-jordan-shoe-jordan-5abd89d88bc4b7.9052185815223710325725.png"
                },
            ],
        },
        {
            id: 3,
            title: "Blaser",
            price: 109,
            color: [

                {
                    code: "lightgray",
                    img: "./images/kisspng-shoe-sneakers-air-jordan-nike-sportswear-jordan-5abdba22e0f342.7499169315223833949214.png",
                },
                {
                    code: "green",
                    img: "./images/kisspng-shoe-sneakers-air-jordan-nike-sportswear-jordan-5abdba22e0f342.7499169315223833949214.png",
                },
            ],
        },
        {
            id: 4,
            title: "Crater",
            price: 129,
            colors: [{
                    code: "black",
                    img: "./images/crater.png",
                },
                {
                    code: "lightgray",
                    img: "./images/crater2.png",
                },
            ],
        },
        {
            id: 5,
            title: "Hippie",
            price: 99,
            color: [{
                    code: "gray",
                    img: "/images/hippie.png",
                },
                {
                    code: "black",
                    img: "/images/hippie2.png"
                },
            ],
        },
    ],


    let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = product[index]

        currentProductTitle.textContent = choosenProductPrice.textContent =
    });
});