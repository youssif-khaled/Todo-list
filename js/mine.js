var element = document.querySelectorAll("li");
var add = document.querySelectorAll(".addBtn");
var search = document.getElementById("myInput");
var ul = document.getElementById("myUL");

for (var i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function () {
    this.classList.toggle("checked");
  });
}

function newElement() {
  let elements = document.createElement("li");
  let span = document.createElement("span");
  let list2 = document.createTextNode("×");
  let list = document.createTextNode(search.value);
  elements.appendChild(list);
  span.appendChild(list2);
  elements.appendChild(span);
  ul.appendChild(elements);
  span.classList.add("close");

  search.value = "";
  if (search.value == "") {
    alert("warnning");
  }

  var element = document.querySelectorAll("li");

  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      this.classList.toggle("checked");
    });
  }

  var close = document.querySelectorAll(".close");

  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
}

var close = document.querySelectorAll(".close");

for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    this.parentElement.remove();
  });
}
