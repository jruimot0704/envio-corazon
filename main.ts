input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
})
