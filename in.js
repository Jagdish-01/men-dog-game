score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animatDino');
        setTimeout(() => {
            dino.classList.remove('animatDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
};

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');

    ob = document.querySelector('.ob');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(ob, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(ob, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    //  console.log(offsetX,offsetY)
    if (offsetX < 113 && offsetY < 52) {
        gameover.innerHTML = "Game over - Reload to play again &#128148;";
        ob.classList.remove('obsani')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();


        }, 1000);
    }
    else if (offsetX < 73 && cross) {
        score += 1;
        updates(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(ob, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            ob.style.animationDuration= newdur + 's';
            console.log("new ani du :", newdur);
        }, 500);
    }

}, 10);

function updates(score) {
    scorecont.innerHTML = "your score" + score;

}