let todo = [];

let req = prompt("Enter your request : ");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    }

    else if(req == "add"){
        let task = prompt("Enter what you want to add : ");
        todo.push(task);
        console.log("Task Added ! ");
    }
    else if(req == "delete"){
        let idx = prompt("Enter index number of element that you want to remove ");
        todo.splice(idx,1);
        console.log("Task Deleted ! ");
    }
    else{
        console.log("Wrong request")
    }
    req = prompt("Enter your request : ");

}