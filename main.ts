input.onButtonPressed(Button.A, function () {
    if (Signed_Bias < 10) {
        Signed_Bias += 1
        basic.showNumber(Signed_Bias)
    }
})
function flash_speed () {
    for (let index = 0; index < 2; index++) {
        basic.showNumber(speed)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.pause(3000)
}
input.onButtonPressed(Button.B, function () {
    if (Signed_Bias > -10) {
        Signed_Bias += -1
        basic.showNumber(Signed_Bias)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    speed += -10
    flash_speed()
    Signed_Bias = 0
})
let speed = 0
let Signed_Bias = 0
music.setVolume(0)
Signed_Bias = 0
speed = 100
flash_speed()
basic.showNumber(Signed_Bias)
basic.forever(function () {
    if (Signed_Bias < 0) {
        Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, 0 - Signed_Bias)
    } else {
        Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Right, Signed_Bias)
    }
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    basic.pause(5000)
    Kitronik_Move_Motor.stop()
})
