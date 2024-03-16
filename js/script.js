const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("nav");
const navUl = document.querySelector(".nav-ul");

hamburgerToggle.addEventListener("click", onHamburgerClick);


const accordionTab = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordionTab.length; i++) {
    // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
    accordionTab[i].addEventListener("click", function () {
        this.classList.toggle("active");

        // Toggle between hiding and showing the active panel //
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function onHamburgerClick() {
    if (!navbar.classList.contains("open")) {
        // Adds open class when hamburger is clicked and if nav does not have open class already
        navbar.classList.add("open");
    }
    else {
        // If it has open class, remove it when hamburger is clicked
        navbar.classList.remove("open");
    }
}