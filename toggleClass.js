/* classToggle - Toggles a class on/off of a target element when a click 
                 event occurs on a trigger element
 * @Params - trigger: element selector that will trigger the toggle
 *         - target: element selector of the target
 *         - toggle: the class name to be toggled on/off of target
 */

const classToggle = function(trigger, target, toggles) {
  const triggerClass = document.querySelector(trigger); //get first element with selector equal to trigger
  const targetClass = document.querySelector(target); //get first element with selector equal to target

  //detect when click event happens on trigger
  triggerClass.addEventListener("click", function() {
    //add/remove toggle class to target element
    targetClass.classList.toggle(toggles);
  });
};

classToggle(".smallMenu", ".menuLinks", "smallMenuOpen");
