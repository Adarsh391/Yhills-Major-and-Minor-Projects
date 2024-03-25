document.addEventListener("DOMContentLoaded", function () {
  
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      // If the form is not valid, display error messages
      contactForm.classList.add("was-validated");
    } else {
      alert("Form submitted successfully!");
    }
  });
});
