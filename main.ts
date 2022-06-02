let reading = 0
basic.showIcon(IconNames.Square)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 500) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
