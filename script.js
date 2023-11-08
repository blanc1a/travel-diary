//ALTER
function getAge() {
  var today = new Date();
  var birth = new Date(1995, 4, 6);
  var dms = today.getTime() - birth.getTime();
  return Math.floor(dms / 365.25 / 24 / 3600 / 1000);
}
window.onload = function () {
  var age = getAge();
  console.log("age: " + age);
  var elem = document.getElementById("age");
  elem.innerHTML = age;
};
