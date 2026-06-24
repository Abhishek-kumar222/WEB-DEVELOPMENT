//1.
let nums = [20,40,30,20,50,10];
console.log(nums.every((ele) => ele%10==0));//true

//2. minimum nummber in arr
function getMinimum(num){
let ans = num.reduce((min,el) => {
    if(min<el){
        return min;
    }else{
        return el;
    }
})
    return ans;
};

let num = [6,4,5,2,4,6,7];
console.log(getMinimum(num));//10
