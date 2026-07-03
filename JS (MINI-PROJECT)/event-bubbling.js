let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

//event bubbling parents ko bhi trigger karta h
div.addEventListener("click", function(){
  console.log("div was clicked"); // sirf div ko trigger karega
});
ul.addEventListener("click", function(){
  console.log("ul was clicked"); // ul ko fir div dono ko trigger karega
});
for (li of lis){
li.addEventListener("click", function(event){
  console.log("li was clicked"); // li fir ul fir div teeno trigger karega
  event.stopPropagation(); // bubbling rokne ke liye ab sirf li bas triger hoga     
});
}