document.addEventListener("DOMContentLoaded", function () {
   const navIcon = document.querySelector(".nav_icon");
   const mobileNav = document.querySelector(".mobile_nav");
   const closeIcon = document.querySelector(".close-icon");
   const elementsToHide = document.querySelectorAll(".cards, footer");

   function toggleMobileNav() {
      if (mobileNav.style.display === "block") {
         mobileNav.style.display = "none";
         elementsToHide.forEach((element) => {
            element.style.display = "block";
         });
      } else {
         mobileNav.style.display = "block";
         elementsToHide.forEach((element) => {
            element.style.display = "none";
         });
      }
   }

   navIcon.addEventListener("click", toggleMobileNav);
   closeIcon.addEventListener("click", toggleMobileNav);
});
