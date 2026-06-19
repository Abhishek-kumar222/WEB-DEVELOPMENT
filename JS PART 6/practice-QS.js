///--QS-1----////

// let arr = [1,2,3,4,5,6,7,8,9];
// let num =5;

// function getElements(arr ,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
//   getElements(arr,num);

//----QS-2---///
let str = "abcdabcdefgggh";
function getUnique(str){
  let ans = "";
  for( let i=0; i<str.length; i++){
     let currChar = str[i];
     if(ans.indexOf(currChar)==-1){
        ans += currChar;
     }
  }
  return ans;
}
console.log(getUnique(str));


//------QS -3 fine longest country name;------//

// let country = [];
// let longestCountry1;

// function longestCountry(country){
//     for(let i=0; i<3; i++){
//     let item = prompt("Enter country name :");
//     country.push(item);
// }
// if(country[0].length >= country[1].length && country[0].length >= country[2].length){
//         longestCountry1 = country[0];
// }
// else if(country[1].length >= country[0].length && country[1].length >= country[2].length){
//         longestCountry1 = country[1];
// }
// else{
//         longestCountry1 = country[2];
// }
// return longestCountry1;

// }

// console.log("The longest country name is " , longestCountry(country));


//QS-4 -----count the vowel in string


// let str = prompt("Enter something !");
// let len = str.length;
// function countVowel(str){
//  let count = 0;
//  for(let i =0; i<len; i++){
//  if(str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"||str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//     count++;
//  }
// }
// return count;
// }
// console.log(countVowel(str));


//QS-5 generate random number range(start,end);

// let start = 100;
// let end =150; 

// function generateNumber(start , end){
// let limit = end- start;
// let num = Math.floor(Math.random()*limit)+start;
// return num;
// }
// console.log(generateNumber(start,end));
