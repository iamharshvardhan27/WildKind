document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = signupForm.elements['signupEmail'].value;
      const password = signupForm.elements['signupPassword'].value;
  
       
      localStorage.setItem('signupEmail', email);
      localStorage.setItem('signupPassword', password);
  
      alert('Signup successful! You can now login.');
      window.location.href = 'login.html';

    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = loginForm.elements['loginEmail'].value;
      const password = loginForm.elements['loginPassword'].value;
  
       
      const storedEmail = localStorage.getItem('signupEmail');
      const storedPassword = localStorage.getItem('signupPassword');
  
      if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
         
        window.location.href = '/pages/wildkindhome/wildkind.html';
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  });
  