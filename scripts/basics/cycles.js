let whileBtn = document.getElementById('while');
let do_whileBtn = document.getElementById('do_while');
let forBtn = document.getElementById('for');

let whileBlock = document.getElementById("while-block");
let do_whileBlock = document.getElementById("do_while-block");
let forBlock = document.getElementById("for-block");

function choiceWhile() {
    whileBlock.style.display = "block";
    do_whileBlock.style.display = "none";
    forBlock.style.display = "none";

    whileBtn.style.color = 'darkred';
    whileBtn.style.border = '2px solid darkred';

    do_whileBtn.style.color = '#4a4e69';
    do_whileBtn.style.border = '2px solid #4a4e69';

    forBtn.style.color = '#4a4e69';
    forBtn.style.border = '2px solid #4a4e69';
}

function choiceDoWhile() {
    whileBlock.style.display = 'none';
    do_whileBlock.style.display = 'block';
    forBlock.style.display = 'none';

    do_whileBtn.style.color = 'darkred';
    do_whileBtn.style.border = '2px solid darkred';

    whileBtn.style.color = '#4a4e69';
    whileBtn.style.border = '2px solid #4a4e69';

    forBtn.style.color = '#4a4e69';
    forBtn.style.border = '2px solid #4a4e69';
}

function choiceFor() {
    whileBlock.style.display = 'none';
    do_whileBlock.style.display = 'none';
    forBlock.style.display = 'block';

    forBtn.style.color = 'darkred';
    forBtn.style.border = '2px solid darkred';

    do_whileBtn.style.color = '#4a4e69';
    do_whileBtn.style.border = '2px solid #4a4e69';

    whileBtn.style.color = '#4a4e69';
    whileBtn.style.border = '2px solid #4a4e69';
}

whileBtn.addEventListener('click', choiceWhile);
do_whileBtn.addEventListener('click', choiceDoWhile);
forBtn.addEventListener('click', choiceFor);