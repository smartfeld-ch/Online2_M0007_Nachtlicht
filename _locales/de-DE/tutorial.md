# Automatisches Nachlicht

## Einführung @unplugged


Benütze den eingebauten Helligkeitssensor um die LED-Matrix automatisch ein- und auszuschalten.
Task: 
Wenn es dunkel ist soll die LED-Matrix automatisch einschalten.
Wenn es hell, soll die Matrix ausgeschaltet sein.










## Schritt 1 

Erstelle eine Variable ``||variable:schwellenwert||`` welche den Wert enthält, bei welchem der @boardname@ die LED's einschalten soll.

```blocks
let schwellenwert = 100

```

## Step 2 @fullscreen

Im dauerhaft-Block soll nun kontinuierlich die Lichstärke abgefragt werden. Wenn diese den Schwellenwert unterschreitet soll die Matrix leuchten.

```blocks
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
        
    }
})
```


## Step 3 @fullscreen

Damit die Matrix auch wieder aus geht, soll sie bei genügend umgebungslicht auch wieder ausgehen.

```blocks
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
```


## Lösung @fullscreen

das ist das fertige Programm:
```blocks
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
```