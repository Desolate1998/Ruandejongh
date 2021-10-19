var menu = [
    document.getElementById('aboutMe'),
    document.getElementById('education'),
    document.getElementById('protfolio'),
]
var menuId = 0

menu[0].addEventListener("click", function(e) {
    console.log('clicked')
    menu[1].classList.remove('focused');
    menu[2].classList.remove('focused');
    menu[0].classList.add('focused');
    menuId = 0
    menuSound.play()
    console.log('clicked')
})

menu[1].addEventListener("click", function(e) {
    menu[0].classList.remove('focused');
    menu[2].classList.remove('focused');
    menu[1].classList.add('focused');
    menuId = 1
    menuSound.play()
})

menu[2].addEventListener("click", function(e) {
    menu[1].classList.remove('focused');
    menu[0].classList.remove('focused');
    menu[2].classList.add('focused');
    menuId = 2
    menuSound.play()
})



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