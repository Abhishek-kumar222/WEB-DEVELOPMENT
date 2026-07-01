let p = document.createElement('p');
p.innerText = "Hey i am red !";
p.style.color="red";
let body = document.querySelector('body');
body.append(p);

let h3 = document.createElement('h3');
h3.innerText = "Hey i am blue h3 !";
h3.style.color="blue";
body.append(h3);

let div = document.createElement('div');
div.style.border = "2px solid black";
div.style.height = '200px'
div.style.width = '400px'
div.style.backgroundColor = "pink";
body.append(div); 


let h1 = document.createElement('h1');
h1.innerText = "Hey i am in a div !";
h1.style.color="blue";
let p1 = document.createElement('p1');
p1.innerText = "ME TOO!";
p1.style.color="blue";
div.appendChild(h1);
div.appendChild(p1);

