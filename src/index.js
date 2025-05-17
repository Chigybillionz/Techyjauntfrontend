// the first outtage click
document.getElementById('report-outage-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.front-page').style.display = 'none';
    // Show the main-section
    document.getElementById('main-section').classList.remove('hidden');
});



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

document.getElementById('signup-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    document.getElementById('main-section').classList.add('hidden'); // Hide main section
    document.getElementById('success-section').classList.remove('hidden'); // Show success section
});












        // // Toggle mobile menu
        // function toggleMobileMenu() {
        //     const mobileMenu = document.getElementById('mobile-menu');
        //     const menuOpenIcon = document.getElementById('menu-open-icon');
        //     const menuCloseIcon = document.getElementById('menu-close-icon');
            
        //     mobileMenu.classList.toggle('open');
        //     menuOpenIcon.classList.toggle('hidden');
        //     menuCloseIcon.classList.toggle('hidden');
        // }
