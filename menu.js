const menuToggle = function() {
  const smallMenuIcon = document.querySelector(".smallMenu"); //get element with class "smallMenu"
  const mobileMenu = document.querySelector(".menuLinks"); //get element with class "menuLinks"

  //detect when click event happens on element with class "smallMenu"
  smallMenuIcon.addEventListener("click", function() {
    //toggle adding/removing class "smallMenuOpen" to element with class "menuLinks"
    mobileMenu.classList.toggle("smallMenuOpen");
  });
};

menuToggle();
