//create string
// array of json object

//{firstaname:"Rangaswamy" , secondname:"G U "} its should be pair of data and name

//  "employess" : [
//     { firstaname: "Rangaswamy", secondname: "G U " },
//     { firstaname: "swapna ", secondname: "patil" },
//     { firstaname: "Raswa ", secondname: "swara " }
//   ] json array

//STEP 1
//create js string containing json syntax

var text =
  '{"employess" : [' +
  ' { "firstaname": "Rangaswamy", "secondname": "g..U " },' +
  '{ "firstaname": "swapna ", "secondname": "patil" },' +
  ' { "firstaname": "Raswa ", "secondname": "swara " }]}';

var text1 =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//step-2
//use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object

var obj = JSON.parse(text1);
var obj1 = JSON.stringify(obj);
window.onload = function what() {
  console.log(this.obj);
  console.log(this.obj1);
  document.getElementById("firstjsonexample").innerHTML =
    obj.employees[0].firstName + " " + obj.employees[0].lastName;
};
