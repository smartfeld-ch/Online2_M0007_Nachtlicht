let schwellenwert = 100
basic.forever(function () {
    if (input.lightLevel() < schwellenwert) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
