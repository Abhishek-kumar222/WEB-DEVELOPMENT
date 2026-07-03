let inp = document.querySelector("#inp");
let p = document.querySelector("p");
inp.addEventListener("input" , function(){
    p.innerText = this.value;
})
