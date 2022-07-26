import './style.css';
import printMe from './print.js';

 function component() {
   const element = document.createElement('div');

  const btn = document.createElement('button');

   element.innerHTML = "Hello World";

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;


  element.appendChild(btn);


   return element;
 }

 document.body.appendChild(component());