/** Define Global Variables */

/**creates an object that contains all the sections */
const sections = document.querySelectorAll("section");

/**creates a object that is the empty "ul" element */
const list = document.getElementById("navbar__list");

const navBar = document.querySelector(".page__header");
/**
 * End Global Variables
 
/* Begin Main Functions
 *
 */

/** This function adds "active-class" to the section in the viewport and also adds "active" as a class to the nav item */
function makeActive() {
  navBar.classList.remove("hidden")
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    let id = section.getAttribute("id");
    if (box.top <= 300 && box.bottom >= 400) {
      section.className = "active-class";
      document.querySelector(`.${id}`).classList.add("active");
    } else {
      let id = section.getAttribute("id");
      document.querySelector(`.${id}`).classList.remove("active");
      section.className = "boring";
    }
  }
}

// build the nav
for (section of sections) {
  /**Creates new nav item "li"*/
  const newElement = document.createElement("li");
  newElement.classList.add(section.id);
  const newDiv = document.createElement("div");
  newDiv.addEventListener("click", (event) => {
    event.preventDefault();
    scrolly(event);
  });
  newDiv.classList.add("navItem");
  /**creates variable "sectionname" and assigns it the value from the "data-nav element" */
  let sectionName = section.dataset.nav;
  /**creates id for the new nav item */
  let navName = section.id + "nav";
  newDiv.setAttribute( "id", "#" + section.id);
  newDiv.innerText = sectionName;
  newElement.setAttribute("id", navName);
  newElement.appendChild(newDiv);
  list.appendChild(newElement);
}
/**creates an object with all the nav items in it */
const navItems = document.getElementById("navbar__list").querySelectorAll("li");

// listen for scroll and then check element position and show the nav. reset timer until next scroll. 
document.addEventListener("scroll", () => {
    makeActive();
  });


/** function to scroll to active section when a nav click occurs */
function scrolly(event) {
  const navigateToId = event.target.getAttribute("id");
  targetSection = navigateToId.substring(1);
  const section = document.querySelector(navigateToId);
  event.target.classList.remove("active");
  section.scrollIntoView({ behavior: "smooth" });
}