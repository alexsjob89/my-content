const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1350
canvas.height = 676

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

class Sprite {
    constructor({ position, velocity, color = 'red', offset }) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.width = 50
        this.lastKey
        this.attacBox = {
                position: this.position,
                width: 100,
                height: 50
            },
            offset,
            this.color = color
        this.isAttacking
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        c.fillStyle = 'green'
        c.fillRect(
            this.attacBox.position.x,
            this.attacBox.position.y,
            this.attacBox.width,
            this.attacBox.height)
    }

    update() {
        this.draw()
        this.attacBox.position.x, this.position.x - this.attacBox.offset,
            this.attacBox.position.y,

            this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity
    }

    attack() {
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

player.draw()

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    offset: {
        x: -50,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue'
})

enemy.draw()


console.log(player)

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false

    }
}


function rectangularCollision({ rectangle1, rectangle2 }) {
    return {
        rectangle1.attacBox.position.x + rectangle1.attacBox.width >=
        rectangle2.position.x && rectangle1.attacBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attacBox.position.y + rectangle1.attacBox.height >= rectangle2.position.y && rectangle1.attacBox.position.y <= rectangle2.position.y + rectangle2.height

    }
}


function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    enemy.velocity.x = 0

    if (keys.a.pressed && player.lastKey === 'a') {
        player.velocity.x = -5
    } else if (keys.d.pressed && player.lastKey === 'd') {
        player.velocity.x = 5
    }

    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 5
    }

    if (
        rectangularCollision({
            rectangle1: player,
            rectangle2: enemy
        }) &&
        player.isAttacking
    ) {
        player.isAttacking = false
        console.log('run')
    }

    if (
        rectangularCollision({
            rectangle1: enemy,
            rectangle2: player
        }) &&
        enemy.isAttacking
    ) {
        enemy.isAttacking = false
        console.log('enemy attack succesfull')
    }

}

animate()

window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'w':
            player.velocity.y = -20
        case ' ':
            {
                player.attack()
                break
            }

        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            enemy.velocity.y = -20
            break
        case 'arrowDown':
            enemy.isAttacking = true
            break
    }
    console.log(event.key)
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = false
            lastKey = 'a'
            break
    }

    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            lastKey = 'ArrowLeft'
            break
    }
    console.log(event.key)
})