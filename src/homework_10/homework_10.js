import './homework_10.scss';


const btnOpen = document.querySelector('#open');
const btnSend = document.querySelector('#send');

function openWindow() {
    let btn = document.querySelector('#open');
    let win = document.querySelector('.window');
    let winBlock = document.querySelector('.window__block');
    win.classList.add('active');
    winBlock.classList.add('active');
}

function sendMessage() {
    let btnSend = document.querySelector('#send');
    let win = document.querySelector('.window');
    let winBlock = document.querySelector('.window__block');
    let headLine = document.querySelector('#headline').value;
    let text = document.querySelector('#text').value;
    let p = document.createElement('p');
    let hOne = document.createElement('h1');
    let border = document.querySelector('#just');
    border.style.border = '3px solid darkgrey';
    border.style.marginTop = '20px';
    hOne.innerText = headLine;
    p.innerText = text;
    win.classList.remove('active');
    winBlock.classList.remove('active');
    just.appendChild(hOne);
    just.appendChild(p);
}

btnOpen.onclick = openWindow;
btnSend.onclick = sendMessage;