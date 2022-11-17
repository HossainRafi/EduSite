// Change navbar style in scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// FAQ answer show or hide
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
      faq.classList.toggle("open");
      
    //  Change toggle icon
      const icon =faq.querySelector('.faq__icon i')
      if (icon.className === "uil-angle-down") {
        icon.className = "uil-angle-up";
      } else {
        icon.className = "uil-angle-down";
      }
  });
});
