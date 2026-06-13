let max = prompt("Enter maximum range of number : ");
let random = Math.floor(Math.random()*max)+1;

let guess = prompt("Enter your guess : ");
 while(true){
    if(guess == "quit"){
        console.log("user quit the game ");
        break;
    }
    else if(guess < random){
        console.log("Number is small please think greater ! ");
    }
    else if(guess > random){
        console.log("Number is greater please think smaller ! ");
    }
    else{
        console.log("congrats ! you guess write ! Your number was : ",random);
        break;
    }
    guess = prompt("Enter your guess : ");
 }