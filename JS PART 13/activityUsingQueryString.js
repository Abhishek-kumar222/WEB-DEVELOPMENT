let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    let colleges = await getCollages(country);
    show(colleges);
    li = "";
} );

function show(colleges){
    let ul = document.querySelector("#info");
    ul.innerText = "";
     for (col of colleges){
    
     let li = document.createElement("li");
     li.innerText = col.name;
     ul.appendChild(li);   
 }
}

async function getCollages(country) {
 try{
     let res =  await axios.get(url + country);
    return (res.data);
 }catch(e){
    console.log("Error - " ,e);
    return [];
 }
};