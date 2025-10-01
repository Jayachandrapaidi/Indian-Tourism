'use strict';

/**
 * ==========================
 * Navbar Toggle
 * ==========================
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

if (navToggleBtn && header) {
  navToggleBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");
  });
}

/**
 * ==========================
 * Go to Top Button
 * ==========================
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (goTopBtn) {
    window.scrollY >= 500
      ? goTopBtn.classList.add("active")
      : goTopBtn.classList.remove("active");
  }
});

/**
 * ==========================
 * Footer – Auto Year
 * ==========================
 */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/**
 * ==========================
 * Newsletter Subscribe (Demo)
 * ==========================
 */
const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector("input[type='email']");
    if (emailInput.value.trim() !== "") {
      alert("✅ Thanks for subscribing with: " + emailInput.value);
      emailInput.value = "";
    } else {
      alert("⚠️ Please enter a valid email address.");
    }
  });
}
