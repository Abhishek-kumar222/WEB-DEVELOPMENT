let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete"); 
    delbtn.innerText = "Delete";
    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value = "";
    
});

// ye functionality sirf existing element ke liye kaam karta h new element jo add honge unpr kaam nhi karta 

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns){
//     delbtn.addEventListener("click" ,function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

// new element pr bhi kaam kare iske new uske parent pr property lagayenge instead of child using bubbling finomena
 ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("Deleted");
    }
 })

