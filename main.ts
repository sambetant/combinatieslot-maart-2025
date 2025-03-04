let Fase = 0
basic.forever(function () {
    if (Fase == 0) {
        basic.showString("C")
    }
    if (Fase == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (Fase == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (Fase == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (Fase == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (Fase == 5) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (Fase == 9) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        Fase = 0
    }
})
basic.forever(function () {
    if (Fase == 0 && input.buttonIsPressed(Button.B) || Fase == 0 && input.logoIsPressed()) {
        Fase = 9
    }
    if (Fase == 1 && input.buttonIsPressed(Button.A) || Fase == 1 && input.logoIsPressed()) {
        Fase = 9
    }
    if (Fase == 2 && input.buttonIsPressed(Button.A) || Fase == 2 && input.buttonIsPressed(Button.B)) {
        Fase = 9
    }
    if (Fase == 3 && input.buttonIsPressed(Button.B) || Fase == 3 && input.logoIsPressed()) {
        Fase = 9
    }
    if (Fase == 4 && input.buttonIsPressed(Button.A) || Fase == 4 && input.buttonIsPressed(Button.B)) {
        Fase = 9
    }
})
basic.forever(function () {
    if (Fase == 0 && input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        Fase = 1
    }
    if (Fase == 1 && input.buttonIsPressed(Button.B)) {
        basic.pause(200)
        Fase = 2
    }
    if (Fase == 2 && input.logoIsPressed()) {
        basic.pause(200)
        Fase = 3
    }
    if (Fase == 3 && input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        Fase = 4
    }
    if (Fase == 4 && input.logoIsPressed()) {
        basic.pause(200)
        Fase = 5
    }
})
