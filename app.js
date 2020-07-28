// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// event..
navToggle.addEventListener("click", function () {
  //   console.log(links.classList);
  //   console.log(links.classList.contains("links"));

  /* // option with if-else..
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }

  */

  // one line
  links.classList.toggle("show-links");
});
