let jsonData = '{"fact":"Approximately 1\/3 of cat owners think their pets are able to read their minds.","length":78}'

let changeData = JSON.parse(jsonData);// json string me data return karta h ye usse js object me change kar deta h
console.log(changeData);



let student ={
    name: "Abhishek",
    age: 21,
    subject: "computer science"
};

let convertINTOjson = JSON.stringify(student); // ye student object ko json data string me convert kar degi 
console.log(convertINTOjson);