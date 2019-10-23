function validateForm() {
  //document.forms["formname"][inputname].value
  var x = document.forms["myForm"]["number"].value;
  if (x <= 10) {
    alert("Should be greater then 10 ");
    return false;
  }
  if (x > 10) {
    alert("Now its fine");
    return false;
  }
}
