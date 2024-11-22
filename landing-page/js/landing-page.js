/* Footer Functions */

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});


const howItWorksLink = document.getElementById("howItWorksLink");
const howItWorksSection = document.getElementById("howItWorks");

howItWorksLink.addEventListener("click", function (event) {
  event.preventDefault();

  howItWorksSection.scrollIntoView({
    behavior: "smooth", 
    block: "start" 
  });
});

const visualMapLink = document.getElementById("visualMapLink");
const cituMapSection = document.getElementById("cituMap");

visualMapLink.addEventListener("click", function (event) {
  event.preventDefault();

  cituMapSection.scrollIntoView({
    behavior: "smooth", 
    block: "start"
  });
});
