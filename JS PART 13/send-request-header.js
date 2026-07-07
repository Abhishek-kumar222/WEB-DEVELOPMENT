// abhi ye html format me respose de rhi

// let url = 'https://icanhazdadjoke.com';

// async function getJokes() {
//     try{
//         let res = await axios.get(url);
//         console.log(res.data);   // abhi ye data html format me aa rha h
//     }catch(e){
//         console.log("error - ",e);
//     }
// }


// ab ise request header bhejenge to json me dega
let url = "https://icanhazdadjoke.com";

async function getJokes() {
    try{
        const config = {headers : { Accept: "application/json"}};
        let res = await axios.get(url , config);
        console.log(res.data);   // ab ye data json ke format me ayega
    }catch(e){
        console.log("error - ",e);
    }
}

getJokes();