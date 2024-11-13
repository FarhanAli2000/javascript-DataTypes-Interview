//----------------------------------------------------------Primitive datatypes
//Number,bigInt,bool,string,undefined,null,symbol

let data = 376634678872898428948n;
// console.log(data);
// console.log(typeof(data));

let isLoggedIn = true;
// console.log(isLoggedIn);
// console.log(typeof(isLoggedIn));

let introduction = "My name is Farhan. I am MERN Stack Developer.";
// console.log(introduction);
// console.log(typeof(introduction));

let employee;
// console.log(employee);
// console.log(typeof(employee));

let myname = null;
// console.log(myname);
// console.log(typeof(myname));   //typeof null is object

//Every symbol is a unique identifier
const sym1=Symbol();
const sym2=Symbol();
// console.log(sym1==sym2);
// console.log(typeof(sym1));


//-----------------------------------------------------------Non-primitive/Reference
//array,object,function

let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(typeof(numbers));     //typeof array is object

const person = {
  name: "jerry",
  profession: "Software engineer",
  isSignUp: false,
  age: 40,
};
// console.log(person.profession);
// console.log(person["name","profession","age"]);  //in this line first value not shown but other shown

function name (){
    console.log("What is your name?");
}
// name();
