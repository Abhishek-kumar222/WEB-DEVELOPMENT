
let btn = document.querySelector("button");

btn.addEventListener("click" , async ()=>{
    let data = await getFacts();
    let img = await getImg();
    let image = document.querySelector("#img");
    let p = document.querySelector("#result");
    image.src = img;
    p.innerText = data;
});

let url2 = 'https://api.thecatapi.com/v1/images/search';
let url = 'https://catfact.ninja/fact';

async function getFacts() {
   try{
     let res = await axios.get(url);
     return (res.data.fact);
    }catch(e){
      return "Fact not found";
    }
}

async function getImg() {
    try{
        let res = await axios.get(url2);
        return (res.data[0].url);
    }catch(e){
        return "not found";
    }
    
}