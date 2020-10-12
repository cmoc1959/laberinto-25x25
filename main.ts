namespace SpriteKind {
    export const Premio = SpriteKind.create()
    export const horizontal = SpriteKind.create()
    export const vertical = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio, function (sprite, otherSprite) {
    music.powerUp.play()
    game.setDialogTextColor(9)
    game.setDialogCursor(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    game.setDialogFrame(img`
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        2 f f f f f f f f f f f f f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f f f f f f f f f f f f f 2 
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        `)
    console.log("tiempo empleado: " + Math.round(game.runtime() / 1000) + " seg")
    game.showLongText("tiempo empleado: " + Math.round(game.runtime() / 1000) + " seg", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    if (ayuda == "S") {
        tiles.setTileAt(location, myTiles.tile3)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    if (ayuda == "S") {
        tiles.setTileAt(location, myTiles.tile2)
    }
})
function Fondos () {
    color = randint(1, 16)
    if (color == 1) {
        scene.setBackgroundColor(0)
    } else if (color == 2) {
        scene.setBackgroundColor(1)
    } else if (color == 3) {
        scene.setBackgroundColor(2)
    } else if (color == 4) {
        scene.setBackgroundColor(3)
    } else if (color == 5) {
        scene.setBackgroundColor(4)
    } else if (color == 6) {
        scene.setBackgroundColor(5)
    } else if (color == 7) {
        scene.setBackgroundColor(6)
    } else if (color == 8) {
        scene.setBackgroundColor(7)
    } else if (color == 9) {
        scene.setBackgroundColor(8)
    } else if (color == 10) {
        scene.setBackgroundColor(9)
    } else if (color == 11) {
        scene.setBackgroundColor(10)
    } else if (color == 12) {
        scene.setBackgroundColor(11)
    } else if (color == 13) {
        scene.setBackgroundColor(12)
    } else if (color == 14) {
        scene.setBackgroundColor(13)
    } else if (color == 15) {
        scene.setBackgroundColor(14)
    } else if (color == 16) {
        scene.setBackgroundColor(15)
    }
}
let color = 0
let ayuda = ""
game.splash("Laberinto 25x25", "Autor: Claudio Orts")
ayuda = game.askForString("Quieres ayuda? S=si, N=no", 1)
let yo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
yo.setPosition(24, 24)
controller.moveSprite(yo)
scene.cameraFollowSprite(yo)
let meta = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Premio)
meta.setPosition(792, 792)
Fondos()
tiles.setTilemap(tilemap`level`)
