//the first page signup clicking 
document.querySelectorAll('.topclick a')[0].addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.front-page').classList.add('hidden');
  document.getElementById('main-section').classList.remove('hidden');
});

document.querySelectorAll('.topclick a')[1].addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.front-page').classList.add('hidden');
  document.querySelector('.welcomeback').classList.remove('hidden');
});



// this is for the forgotten passord link that has an imagen at the frame top 
document.querySelector('.clikingforgotimage').addEventListener('click', function() {
  document.querySelector('.passwordpage').classList.add('hidden');
  document.getElementById('reset-password-form').classList.remove('hidden');
});






// when the report outage button is clicked in the first home page
  document.getElementById('report-outage-btn').addEventListener('click', function() {
    document.querySelector('.front-page').classList.add('hidden');
    document.querySelector('.fullhomepage').classList.remove('hidden');
  });

  // Select the Sign up button inside .anothersigning in the second home page 
  document.querySelectorAll('.anothersigning a')[0].addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.fullhomepage').classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');
  });
// when the lgin button is clicked in the second home page 
 document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.anothersigning a:nth-child(2)');
    if (loginBtn) {
      loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.fullhomepage').classList.add('hidden');
        document.querySelector('.welcomeback').classList.remove('hidden');
      });
    }
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
// Show success message after form submission
document.getElementById('signup-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.getElementById('main-section').classList.add('hidden'); 
    document.getElementById('success-section').classList.remove('hidden'); 
});

// this for the opening of the welcome back section
 document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('#success-section .Enter');
    const successSection = document.getElementById('success-section');
    const welcomeBackSection = document.querySelector('.welcomeback');

    if (loginBtn && successSection && welcomeBackSection) {
      loginBtn.addEventListener('click', function () {
        successSection.classList.add('hidden');
        welcomeBackSection.classList.remove('hidden');
      });
    }
  });


  // this for the opening of the forgottpassowrd section
   document.addEventListener('DOMContentLoaded', function () {
    const forgotBtn = document.querySelector('.forgotpassword');
    const passwordPage = document.querySelector('.passwordpage');
    const loginSection = forgotBtn.closest('.welcomeback');

    if (forgotBtn && passwordPage && loginSection) {
      forgotBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
        loginSection.classList.add('hidden');
        passwordPage.classList.remove('hidden');
      });
    }
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
