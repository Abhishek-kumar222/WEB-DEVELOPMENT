/////---reduce method---/// reduce array in single value 
let nums = [1,2,3,4];
let final = nums.reduce((sum,ele) => {
   console.log(sum);
  return sum+ele;
});
console.log(final) // 10
console.log(nums.reduce((fact,ele) => (fact*ele))); //24


/// find maximum value using reduce function

let numbers = [2,3,5,6,4,1];
let ans = numbers.reduce((max,ele)=>{
    if(max>ele){
        return max;
    }else{
        return ele;
    }
});
console.log(ans); //6

