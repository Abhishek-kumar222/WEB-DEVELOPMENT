 let movie = "Aavtar";
 let guess = prompt("Enter your movie :");

 while(guess != movie){
    if(guess == "quit"){
    console.log("You quit the game ! ");
    break;
    }
    guess = prompt("Wrong guess please try again ! ");
 }
 if(guess==movie){
 console.log("Congratulation @ ");
 }