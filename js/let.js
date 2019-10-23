//let and const refer for block scope

$(document).ready(function() {
  let name = " ranga";
  console.log(name);
  //jquery methods
  $("#Calculatediff").click(function() {
    console.log("omg!!!");
  });

  $("#checkitup").click(function() {
    alert("Hey dude");
  });
});

// $("#Calculatesum").click(function() {
//   var x = parseInt(document.getElementById("first").value);
//   var y = parseInt(document.getElementById("second").value);
//   var result = x + y;
//   console.log(result);
//   document.getElementById("result").innerHTML = result;

//   //alert(result);
// });

//arrow function

//   p = document.getElementById("Calculatediff");
//   p.addEventListener("click", subtract);

function calculate() {
  console.log("calculate");
  var x = parseInt(document.getElementById("first").value);
  var y = parseInt(document.getElementById("second").value); //reading numbers
  var operator = document.getElementById("operator").value; //reading string
  console.log(operator);
  switch (operator) {
    case "+":
      sum(x, y); //passing parameter to function
      break;

    case "-":
      subtract(x, y);
      break;
    default:
      alert("error");
  }
}

function subtract(x, y) {
  let result = x - y;

  document.getElementById("result").value = result;
  console.log(result);
  alert(result);
}

function sum(x, y) {
  //parameters to js
  try {
    var result = x + y;
  } catch (error) {
    console.log(error.value);
  }

  document.getElementById("result").value = result;
  alert(result);
  console.log(result);
}

//call  by id
