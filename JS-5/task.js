// TASK
const post ={
  username : "@abhishekchoudhary",
  content : "This is my #firtpost ",
  likes : 150,
  repost : 5,
  tags : ["@apnacollega" ," @delta"]
};


// CLASS
//random obeject
const obj ={
  1 : "a",
  2 : "b",
  true : "c",
  null : "d",
  undefined : "e"  // is case me js null, true, or undefined keyword ko as a string use karta h not like keyword
}


//or calling karte time like 
obj[true]/* is case me bhi js pehle true ko string me convert karega fir comparision karega fir print karega
similar for all */

//and 

//if we call like that

obj[1] //is case me bhi 1 ko as a index nhi balki ek string work karega
//but 
//obj.1 // is case error dedega 
obj.true //chal jayega

