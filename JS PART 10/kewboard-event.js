// let btn = document.querySelector("button");
// btn.addEventListener("keydown" , function(){
//     console.log("key was pressed ");
// })

let inp = document.querySelector("input");

// inp.addEventListener("keydown" , function(event){
//     console.log(event);
//     console.log("key was pressed "); // jitni baar key press krenge funtion work karga
// })

// inp.addEventListener("keyup" , function(){
//     console.log("key was released "); // jitni baar key press krke chorenge funtion work karga
// })

inp.addEventListener("keydown" , function(event){
    console.log(event.code);

    // if(event.code == "ArrowUp"){
    //     console.log("charactor move forward ")
    // }
    // else if(event.code == "ArrowDown"){
    //     console.log("charactor move backward ")
    // }
    // else if(event.code == "ArrowLeft"){
    //     console.log("charactor move left ")
    // }
    // else if(event.code == "ArrowRight"){
    //     console.log("charactor move Right ")
    // }


    if(event.code == "KeyU"){
        console.log("charactor move forward ")
    }
    else if(event.code == "KeyD"){
        console.log("charactor move backward ")
    }
    else if(event.code == "KeyL"){
        console.log("charactor move left ")
    }
    else if(event.code == "KeyR"){
        console.log("charactor move Right ")
    }
})