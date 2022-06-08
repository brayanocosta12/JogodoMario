const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.pipe');

const jump = () => {
mario.classList.add('jump');

setTimeout(() => {

    mario.classList.remove('jump');

}, 500);


}

const loop = setInterval(() =>{

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');



    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 80 ){

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = './img/game-over.png';
        mario.style.width = '90px'
        mario.style.margin = '5%'

        gameover.src ='./img/gameover.png';
        gameover.style.width ='50%';
        gameover.style.left ='25%';
       
      



        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump);

/*https://www.youtube.com/watch?v=r9buAwVBDhA*/