input.onButtonPressed(Button.A, function () {
    status = 0
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    if (interval == 60000) {
        interval = 10000
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (interval == 10000) {
            interval = 1000
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else {
            if (interval == 1000) {
                interval = 300000
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                if (interval == 300000) {
                    interval = 60000
                    basic.showLeds(`
                        . . . . .
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                } else {
                	
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    status = 1
    basic.showIcon(IconNames.Yes)
})
let status = 0
let interval = 0
basic.showIcon(IconNames.House)
datalogger.setColumnTitles(
"date",
"sonar_1",
"sonar_2"
)
let sonarvar = 0
let sonvar2 = 0
interval = 60000
status = 0
loops.everyInterval(60000, function () {
	
})
basic.forever(function () {
    while (status == 1) {
        sonarvar = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P0,
        PingUnit.MicroSeconds
        )
        basic.showNumber(sonarvar)
        basic.pause(1000)
        basic.showString(" ")
        if (sonarvar < 400) {
            basic.showNumber(0)
            sonvar2 = 0
        } else {
            if (sonarvar < 800) {
                basic.showNumber(1)
                sonvar2 = 1
            } else {
                if (sonarvar < 1200) {
                    basic.showNumber(2)
                    sonvar2 = 2
                } else {
                    if (sonarvar < 1600) {
                        basic.showNumber(3)
                        sonvar2 = 3
                    } else {
                        if (sonarvar < 2000) {
                            basic.showNumber(4)
                            sonvar2 = 4
                        } else {
                            if (sonarvar < 2400) {
                                basic.showNumber(5)
                                sonvar2 = 5
                            } else {
                                if (sonarvar < 2800) {
                                    basic.showNumber(6)
                                    sonvar2 = 6
                                } else {
                                    if (sonarvar < 3200) {
                                        basic.showNumber(7)
                                        sonvar2 = 7
                                    } else {
                                        if (sonarvar < 3600) {
                                            basic.showNumber(8)
                                            sonvar2 = 8
                                        } else {
                                            if (sonarvar < 7000) {
                                                basic.showNumber(9)
                                                sonvar2 = 9
                                            } else {
                                            	
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        datalogger.log(
        datalogger.createCV("sonar_1", sonarvar),
        datalogger.createCV("sonar_2", sonvar2),
        datalogger.createCV("date", timeanddate.time(timeanddate.TimeFormat.HMMSSAMPM))
        )
        basic.pause(interval)
    }
})
