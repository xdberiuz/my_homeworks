import './homework_5.css';


var btns = document.getElementsByClassName('header');
var par = document.getElementsByClassName('header');
btns[0].onclick = function() {
  par[0].classList.add("opened");
}
btns[1].onclick = function() {
  par[0].classList.remove("opened");
}
  