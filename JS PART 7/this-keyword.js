const student = {
   name : "Abhishek",
   age : 23,
   eng : 95,
   math : 97,
   phy : 93,
   getAvg(){
    console.log(this);
    let avg = (this.eng + this.math + this.phy)/3; // for accessing the value
    console.log(avg);
   }
}