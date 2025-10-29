
(function () {
  const form = document.querySelector('form[aria-label="Contact form"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Thank you!");
      form.reset();
    });
  }
})();
