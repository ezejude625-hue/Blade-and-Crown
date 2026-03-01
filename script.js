// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  setMinDate();
});

// ========== Mobile Menu ==========
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("open", menuOpen);
  menuIcon.setAttribute("data-lucide", menuOpen ? "x" : "menu");
  lucide.createIcons();
});

function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove("open");
  menuIcon.setAttribute("data-lucide", "menu");
  lucide.createIcons();
}

// ========== Set min date for booking ==========
function setMinDate() {
  const dateInput = document.getElementById("bookingDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
}

// ========== Booking Form ==========
const bookingForm = document.getElementById("bookingForm");
const bookingConfirmation = document.getElementById("bookingConfirmation");
const confirmationDetails = document.getElementById("confirmationDetails");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("bookingName").value.trim();
  const phone = document.getElementById("bookingPhone").value.trim();
  const service = document.getElementById("bookingService").value;
  const barber =
    document.getElementById("bookingBarber").value || "any available barber";
  const date = document.getElementById("bookingDate").value;
  const time = document.getElementById("bookingTime").value;

  if (!name || !phone || !service || !date || !time) {
    alert("Please fill in all required fields.");
    return;
  }

  confirmationDetails.textContent = `${service} with ${barber} on ${date} at ${time}.`;

  bookingForm.classList.add("hidden");
  bookingConfirmation.classList.remove("hidden");
  lucide.createIcons();
});

function resetBooking() {
  bookingForm.reset();
  bookingForm.classList.remove("hidden");
  bookingConfirmation.classList.add("hidden");
}

// ========== Scroll Animations (Intersection Observer) ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and sections for scroll-in animations
document
  .querySelectorAll(".service-card, .barber-card, .contact-card")
  .forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    observer.observe(el);
  });
