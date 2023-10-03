import './style.css';
import './myFont.ttf'
import Icon from './images/icon.png';

console.log("working")

const hello = document.querySelector(".hello");

const myIcon = new Image();
myIcon.src = Icon;


hello.appendChild(myIcon);