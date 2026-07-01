//Q.1

let btn = document.createElement('button');
let input = document.createElement('input');
btn.innerText = "Click me";
let body = document.querySelector('body');
body.append(btn);
body.append(input);

//Q.2
// input.placeholder="username";
// btn.id = 'btn';
btn.setAttribute('id' , "btn");
input.setAttribute('placeholder' , "username");
// console.dir(btn);

//Q.3
let btn1 = document.querySelector('#btn');
btn1.style.backgroundColor = "blue";
btn1.style.color = "white";

//Q.4

let h1 = document.createElement('h1');
h1.innerText = 'DOM Practice';
h1.style.color = 'purple';
h1.style.textDecoration = 'underline';
body.append(h1);

let p = document.createElement('p');
p.innerHTML = 'Apna College <b>Delta</b> Practice';
body.append(p);