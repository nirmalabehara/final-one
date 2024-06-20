
document.addEventListener('DOMContentLoaded', function() {
  const loginLink = document.querySelector('.login-link');
  const signupLink = document.querySelector('.signup-link');
  const loginContainer = document.querySelector('.login-container');
  const signupContainer = document.querySelector('.container');

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginContainer.style.display = 'block';
  signupContainer.style.display = 'none';
});

signupLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginContainer.style.display = 'none';
  signupContainer.style.display = 'block';
});

const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "movies.html"; 
});

const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "movies.html";
  });
});

      
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);

    fetch('/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: id_token })
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    });
  }

  function googleSignIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(onSignIn);
  }

  function init() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
}
document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username !== 'admin' || password !== 'password123') {
      document.getElementById('error-message').innerText = 'Incorrect username or password.';
  } else {
      document.getElementById('error-message').innerText = '';
      alert('Login successful!');
  }
});
