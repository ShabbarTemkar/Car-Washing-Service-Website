document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const modal = document.getElementById("booking-modal");
  const bookBtns = document.querySelectorAll(".btn-book, .btn-cta");
  const closeBtn = document.querySelector(".close-btn");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const bookingForm = document.getElementById("booking-form");

  // Modal Functionality
  const openModal = () => {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  bookBtns.forEach((btn) => btn.addEventListener("click", openModal));
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close modal on Escape key press
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Mobile Hamburger Menu Toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close mobile menu on link navigation
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Booking Form Submission
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service-select").value;

    alert(`Thank you, ${name}! Your booking for ${service} has been received.`);
    bookingForm.reset();
    closeModal();
  });
});