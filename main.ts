radio.onReceivedValue(function (name, value) {
    speed = value
    if (name == "go") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, speed)
    } else if (name == "back") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, speed)
    }
    if (name == "right") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, speed)
    } else if (name == "left") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, speed)
    }
})
let speed = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
motobit.enable(MotorPower.On)
basic.forever(function () {
    basic.showNumber(speed)
})
