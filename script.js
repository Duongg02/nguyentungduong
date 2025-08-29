document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
 navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    alert("Bạn vừa bấm vào: " + link.textContent);
  });
});
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  const backToTopButton = document.createElement("button");
  backToTopButton.innerText = "▲";
  backToTopButton.classList.add("back-to-top");
  document.body.appendChild(backToTopButton);
  backToTopButton.style.cssText =
  "position: fixed;" +
  "bottom: 20px;" +
  "right: 20px;" +
  "background: #ffc107;" +
  "border: none;" +
  "padding: 10px 15px;" +
  "border-radius: 50%;" +
  "font-size: 20px;" +
  "color: #000;" +
  "cursor: pointer;" +
  "display: none;" +
  "z-index: 1000;";

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

var sections = document.querySelectorAll("section");
var options = {
  root: null,
  threshold: 0.2,
};

var revealOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, options);

sections.forEach(function (section) {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  revealOnScroll.observe(section);
});
