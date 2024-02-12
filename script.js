document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Here you can add code to handle form submission, such as sending an email or displaying a success message.
    alert("Your message has been sent!");
  });
