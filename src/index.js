//all password hiding and unhiding process
function togglePasswordVisibility(button) {
  const input = button.parentElement.querySelector('input');
  const eye = button.querySelector('svg:not(.hidden)');
  const eyeOff = button.querySelector('svg.hidden');

  if (input.type === "password") {
    input.type = "text";
    if (eye) eye.classList.add('hidden');
    if (eyeOff) eyeOff.classList.remove('hidden');
  } else {
    input.type = "password";
    if (eye) eye.classList.remove('hidden');
    if (eyeOff) eyeOff.classList.add('hidden');
  }
}

// email validation
function isValidEmail(email) {
  // Simple email regex pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Example usage with a form:
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && !isValidEmail(emailInput.value)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        emailInput.focus();
      }
    });
  });
});

// toggles the success card
document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById('signup-btn');
  const form = signupBtn.closest('form');
  const successSection = document.getElementById('success-section');
    const mainSection = document.getElementById('main-section'); // Add this line


  if (signupBtn && form && successSection) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
      // form.classList.add('hidden'); // Hide the form
            mainSection.classList.add('hidden'); // Hide the main page

      successSection.classList.remove('hidden'); // Show the success section
      successSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});