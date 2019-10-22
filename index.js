//scripts should run after Dom loads

window.onload = function() {
  document.getElementById("Buttonclick").onclick = function showalert() {
    alert("Hi welcome to site");
  };
};

$(document).ready(function() {
  $("p").click(function() {
    alert("hi how are u??");
    // $(this).hide();
  });

  $("h1").dblclick(function() {
    console.log("you double clicked h1 tag");
  });
});

function clickme() {
  alert("hi how are u??");
} //to write function in js

//objects in javascript
var mydetail = {
  firstname: "ranga",
  secondname: "swamy",
  age: 24,
  profession: "engineer",

  myfullname: function() {
    return this.firstname + " " + this.secondname;
  }
};
console.log(mydetail.myfullname());
//about strings

var scipt =
  "Hi everyone , myself 'rangaswamy' ,\n I am just trying to learn \n \"javascript\" ";
console.log(scipt);
//string methods
var length = scipt.length;
var pos = scipt.indexOf("just"); //position
//indexOf("string") --> return position
//lastIndexOf("string")  lastIndexOf("string","position to start searching")
//search() -> searches for sting and return position of searched array
//replace()
//toUpperCase()
//toLowerCase()
var slice = scipt.slice(2, 10); //slice(start ,end ); , substring(start,end); substr(start,end) ;
console.log("lenth=" + length);
console.log("sliced part of original string -->" + slice);
console.log('position of "just" is ' + pos);

//arrays in java script
var car = Array("one", "two");
console.log(car);

var number = ["first", "second", "third"];
console.log("First element ---> " + number[0]);

//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
//methods

//adding to an array
car.push("three");
car.push("four");
console.log(car);
//poping from an array
car.pop();
console.log("after poping");
console.log(car);
car.sort();
console.log("After sorting by sort() alpabetically  " + "  " + car);

//  var bike = car.map();
//  console.log("another array");
//  console.log(bike);

var date = new Date();
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());
//ramdom numbers
var randomnumber = Math.floor(Math.random() * 100 + 1);
console.log(randomnumber);
