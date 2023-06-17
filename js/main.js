

/*------------------------------*/
/* #HEADER GLOBAL VARIABLES: */
/*------------------------------*/

const mobileMenuBtn = document.querySelector(".main-navigation__mobile-menu");
const mainNavEle = document.querySelector(".main-navigation")
const mobileMenuIconEle = document.querySelector(".main-navigation__mobile-menu").firstElementChild
const menuNavListEle = document.querySelector(".main-navigation__menu")


/*------------------------------*/
/* #EVENT LISTENERS: */
/*------------------------------*/

mobileMenuBtn.addEventListener("click", toggleMobileMenu)




function toggleMobileMenu() {
  const menuVisibility = menuNavListEle.getAttribute("data-visible", false);
  if (menuVisibility === "false") {
    menuNavListEle.setAttribute("data-visible", true) 
    mobileMenuIconEle.className = 'fa-solid fa-xmark';
    mobileMenuIconEle.style.color = "orange";
  } else if (menuVisibility === "true") {
menuNavListEle.setAttribute("data-visible", false)
mobileMenuIconEle.className = 'fa-solid fa-bars';
mobileMenuIconEle.style.color = "#FE5B55";
}
}
