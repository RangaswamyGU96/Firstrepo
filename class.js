//class nothing but function  here

class Name {
  constructor(name) {
    this.myname = name;
  }

  showmyname() {
    return "hello..!" + "\n\r" + this.myname;
  }
}
//myfirstname = new Name("Ranga");
//inheritence of super class using exeteds
class Fullname extends Name {
  constructor(name, sname) {
    super(name);
    this.secondname = sname;
  }
  //wecan use getters and setters

  get fname() {
    return this.myname + this.secondname;
  }
  set fname(x) {
    this.secondname = x;
  }

  ShowFullname() {
    return this.showmyname() + this.secondname;
    //debugger;
  }
}
mysecondname = new Fullname("Ranga", "swamy");
window.onload = function what() {
  document.getElementById(
    "displaymyname"
  ).innerHTML = mysecondname.ShowFullname();
};
