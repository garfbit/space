input.onButtonPressed(Button.A, function () {
    Nave.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bala = game.createSprite(Nave.get(LedSpriteProperty.X), Nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        Bala.change(LedSpriteProperty.Y, -1)
        if (Bala.isTouching(Enemigo)) {
            Enemigo.delete()
            Bala.delete()
            game.addScore(1)
        }
    }
    if (Bala.get(LedSpriteProperty.Y) == 0) {
        basic.pause(100)
        Bala.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    Nave.change(LedSpriteProperty.X, 1)
})
let Enemigo: game.LedSprite = null
let Bala: game.LedSprite = null
let Nave: game.LedSprite = null
Nave = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    Enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(2000)
        Enemigo.change(LedSpriteProperty.Y, 1)
        if (Enemigo.isTouching(Nave)) {
            game.gameOver()
        }
    }
    if (Enemigo.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        Enemigo.delete()
    }
})
