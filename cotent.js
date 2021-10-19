var menu = [
    document.getElementById('aboutMe'),
    document.getElementById('education'),
    document.getElementById('protfolio'),
]
var menuId = 0
var A = document.getElementById('A')
var menuSound = new Audio('./Sounds/Menu Selection Click.wav')
var upArrow = document.getElementById('upArrow')
var downArrow = document.getElementById('downArrow')
menu[menuId].append(A);

function animateMenuSelect() {
    var menuElement = document.getElementById('menu');
    var menuContent = document.getElementById('displayContent');



}


menu[0].addEventListener("click", function(e) {
    menu[1].classList.remove('focused');
    menu[2].classList.remove('focused');
    menu[0].classList.add('focused');
    menuId = 0
    menuSound.play()
    menu[0].append(A);
    document.getElementById('displayContent').innerHTML = pages.aboutMe
})

menu[1].addEventListener("click", function(e) {
    menu[1].append(A);
    menu[0].classList.remove('focused');
    menu[2].classList.remove('focused');
    menu[1].classList.add('focused');
    menuId = 1
    menuSound.play()

    document.getElementById('displayContent').innerHTML = pages.education

})

menu[2].addEventListener("click", function(e) {
    menu[2].append(A);
    menu[1].classList.remove('focused');
    menu[0].classList.remove('focused');
    menu[2].classList.add('focused');
    menuId = 2
    menuSound.play()
    document.getElementById('displayContent').innerHTML = pages.portfolio

})

downArrow.style.color = 'grey'
upArrow.style.color = 'grey'



menuSound.playbackRate = 10
document.onkeydown = checkKey;


function checkKey(e) {

    if (e.keyCode == '65' || e.keyCode == '13') {
        animateMenuSelect()
    }



    e = e || window.event;
    if (e.keyCode == '38') {
        //up arrow was clicked
        upArrow.style.color = 'white'

        setTimeout(() => {

            upArrow.style.color = 'grey'

        }, 100);
        if (menuId != 0) {
            menuSound.play()

            menu[menuId].classList.remove('focused');
            menu[--menuId].classList.add('focused');
            menu[menuId].append(A);


        }

    } else if (e.keyCode == '40') {
        downArrow.style.color = 'white'

        setTimeout(() => {

            downArrow.style.color = 'grey'

        }, 100);
        setTimeout(() => {
            downArrow.style.transform = 'scale(1)'
        }, 100);
        if (menuId != 2) {

            menuSound.play()
            menu[menuId].classList.remove('focused');
            menu[++menuId].classList.add('focused');
            menu[menuId].append(A);

        }

    } else if (e.keyCode == '37') {
        // left arrow
    } else if (e.keyCode == '39') {
        // right arrow

    }

}