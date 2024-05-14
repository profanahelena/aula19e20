let X = 0
input.onGesture(Gesture.Shake, function () {
    X = randint(0, 2)
    if (X == 0) {
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.stringPlayable("C A G A C G D C5 ", 120), music.PlaybackMode.LoopingInBackground)
    } else if (X == 1) {
        basic.showIcon(IconNames.Square)
        music.play(music.stringPlayable("B A G A F D D E ", 120), music.PlaybackMode.LoopingInBackground)
    } else {
        basic.showIcon(IconNames.Scissors)
        music.play(music.stringPlayable("B A G C F C5 D E ", 120), music.PlaybackMode.LoopingInBackground)
    }
})
