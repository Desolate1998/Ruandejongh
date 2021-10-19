var menu = [
    document.getElementById('aboutMe'),
    document.getElementById('education'),
    document.getElementById('protfolio'),
]
var menuId = 0


var menuSound = new Audio('./Sounds/Menu Selection Click.wav')
menuSound.playbackRate = 10
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        //up arrow was clicked
        if (menuId != 0) {
            menuSound.play()
            menu[menuId].classList.remove('focused');
            menu[--menuId].classList.add('focused');
        }

    } else if (e.keyCode == '40') {
        console.log(menuId)
        if (menuId != 2) {
            menuSound.play()

            menu[menuId].classList.remove('focused');
            menu[++menuId].classList.add('focused');
        }

    } else if (e.keyCode == '37') {
        // left arrow
    } else if (e.keyCode == '39') {
        // right arrow

    }

}