document.addEventListener('DOMContentLoaded', (event) => {
    // Get the login form
    const loginForm = document.querySelector('.sign-in-form');
    
    // Add event listener to the login form
    loginForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Redirect to the specified URL
      window.location.href = 'https://rejowan-arifin.github.io/Sp3/';
    });
  });
  
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});