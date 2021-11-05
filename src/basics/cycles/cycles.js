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

//------------------- функция копирования -------------------------
function copy(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}

let cb = [];
let cbCount = 8;
for(let i = 1; i <= cbCount; i++){
    cb[i] = document.getElementById('cb'+ i);
}

function copyCT1() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 1) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}
function copyCT2() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 2) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}
function copyCT3() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 3) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}
function copyCT4() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 4) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}
function copyCT5() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 5) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}
function copyCT6() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 6) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}
function copyCT7() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 7) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}
function copyCT8() {
    for(let i = 1; i <= cbCount; i++){
        if (i == 8) cb[i].src = "../../../img/copy-red.png";
        else cb[i].src = "../../../img/copy-blue.png";
    }
}

// function copyColorChange(){
//     for(let i = 1; i <= cbCount; i++){
//         for(let j = 1; j <= cbCount; j++){
//             if (j == i) cb[j].src = "../../img/copy-red.png";
//             else cb[j].src = "../../img/copy-blue.png";
//         }
//     }
// }
//
// for(let i = 1; i <= cbCount; i++){
//     cb[i].addEventListener("click", copyColorChange);
// }

cb[1].addEventListener("click", copyCT1);
cb[2].addEventListener("click", copyCT2);
cb[3].addEventListener("click", copyCT3);
cb[4].addEventListener("click", copyCT4);
cb[5].addEventListener("click", copyCT5);
cb[6].addEventListener("click", copyCT6);
cb[7].addEventListener("click", copyCT7);
cb[8].addEventListener("click", copyCT8);