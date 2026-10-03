// ===============================
// VPM WEBSITE SETTINGS
// Change ONLY the values below.
// ===============================
const VPM_PHONE = "919326183267"; // Example: 919876543210
const VPM_DISPLAY_PHONE = "+91 93261 83267 ";
const VPM_DEFAULT_MESSAGE =
  "Hi, I found Vishal Property Maintenance online and I would like to enquire about a home maintenance service.";

// WhatsApp links
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/${VPM_PHONE}?text=${encodeURIComponent(VPM_DEFAULT_MESSAGE)}`;
});

document.querySelectorAll("[data-whatsapp-message]").forEach((link) => {
  const message = link.getAttribute("data-whatsapp-message");
  link.href = `https://wa.me/${VPM_PHONE}?text=${encodeURIComponent(message)}`;
});

// Phone number
document.querySelectorAll("[data-phone]").forEach((el) => {
  el.textContent = VPM_DISPLAY_PHONE;
});
document.querySelectorAll("[data-phone-link]").forEach((link) => {
  link.href = `tel:+${VPM_PHONE}`;
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
