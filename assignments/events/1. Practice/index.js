//Select the section with an id of container without using querySelector.
var id = document.getElementById("container");

//Select the section with an id of container using querySelector.
var id = document.querySelector("id");

//Select all of the list items with a class of "second".

var second = document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
var third = document.querySelectorAll("ol > .third");

//Give the section with an id of container the text "Hello!".
var container = document.getElementById("container");
container.append("hello");
//Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.add("main");

//Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//Create a new li element.
var li = document.createElement("li");

//Give the li the text "four".
li.innerText = "four";

//Append the li to the ul element.
var ul = document.querySelector("ul");
ul.appendChild(li);

//Loop over all of the list inside the ol tag and give them a background color of "green".
var ol = document.querySelector("ol");
[...ol.children].forEach(n => (n.style.background = "green"));

//Remove the div with a class of footer.
footer.remove();
