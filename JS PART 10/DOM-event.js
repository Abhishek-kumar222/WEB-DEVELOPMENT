let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function() {
//    alert('button was clicked !');
// }

for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function() {
    //     console.log("you entered the button !");
    // }
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me ")
    });
}

function sayHello() {
  alert("hellow");
}

function sayName() {
  alert("Abhishek");
}